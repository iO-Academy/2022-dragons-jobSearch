import {useEffect, useState} from "react";
import ContractTypeTag from "../ContractType/contractType";
import SkillTag from "../SkillTag/SkillTag";
import uniqid from "uniqid";

const JobModal = ({jobId, modalShow, setModalShow}) => {
    const [jobData, setJobData] = useState(null)

    const closeModal = () => {
        setModalShow(false)
    }

    const modalClick = (e) => {
        e.stopPropagation()
    }

    useEffect(() => {
        const getSingleJob = async () => {
            let response = await fetch(`http://localhost:8080/jobs/${jobId}`)
            const jobData = await response.json()
            setJobData(jobData)
        }
        if(jobId !== null){
            getSingleJob()
        }

    }, [jobId])

    function formatDate(dateStr) {
        let dateArray = dateStr.split("-")
        let newDate = dateArray[2] + '/' + dateArray[1] + '/' + dateArray[0]
        return newDate
    }

    return (
        <>
            {jobData &&
                <div onClick={closeModal} className={modalShow === true ? 'modalScreen modalOpen' : 'modalScreen modalClosed'}>
                    <section onClick={modalClick} className="JobModal">
                        <div className="modalTitle">
                            <h3>{jobData.job_title} - {jobData.company}</h3>
                            <a href="#"><p onClick={closeModal}>{"\u2715"}</p></a>
                        </div>
                        <div className="modalBanner">
                            <h3>{jobData.job_title}</h3>
                            <ContractTypeTag contractType={jobData.type} />
                        </div>
                        <div className="modalJob">
                            <div className="company">
                                <img alt="company logo" src={jobData.logo} />
                                <h4>{jobData.company}</h4>
                            </div>
                            <h3>Key Facts:</h3>
                            <div className="keyFacts">
                                <h5>Salary:</h5>
                                <h5>Type:</h5>
                                <h5>Date posted:</h5>
                                <h5>Skills:</h5>
                                {jobData.salary !== null ?
                                    <h5>£{parseInt(jobData.salary).toLocaleString("en-US")}</h5>
                                    : <h5></h5>
                                }
                                <h5>{jobData.type}</h5>
                                <h5>{(formatDate(jobData.posted))}</h5>
                                <div className="skills">
                                    {jobData.skills.map((skill) => {
                                        return <SkillTag key={uniqid()} skillTag={skill.skill} />
                                    })}
                                </div>
                            </div>
                            <main>
                                <h2>Job Description</h2>
                                <p>{jobData.job_description}</p>
                                <div className="buttons">
                                    <button className="applyButton">Apply Now</button>
                                    <button className="saveForLaterButton">Save for later</button>
                                </div>
                            </main>
                        </div>
                    </section>
                </div>

            }
        </>
    )
}

export default JobModal