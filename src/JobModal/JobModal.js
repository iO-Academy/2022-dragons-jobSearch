import {useEffect, useState} from "react";

const JobModal = ({jobId}) => {
    const [jobData, setJobData] = useState(null)
    useEffect(() => {
        console.log(jobId)
        const getSingleJob = async () => {
            let response = await fetch(`http://localhost:8080/jobs/${jobId}`)
            const jobData = await response.json()
            setJobData(jobData)
        }
        if(jobId !== null){
            getSingleJob()
        }

    }, [jobId])
    return (
        <>
            <button onClick={()=> console.log(jobData)}>Button</button>
            <div className="modalScreen">
                <section className="JobModal">
                    <div className="modalTitle">
                        <h3>{jobData.job_title} - {jobData.company}</h3>
                        <a><icon>{"\u2715"}</icon></a>
                    </div>
                    <div className="modalBanner">
                        <h3>{jobData.job_title}</h3>
                        <i>COMPONENT</i>
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
                            <h5>£{parseInt(jobData.salary).toLocaleString("en-US")}</h5>
                            <h5>COMPONENT</h5>
                            <h5>{(jobData.posted).replaceAll("-", "/")}</h5>
                            <div className="skills">
                                COMPONENT
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
        </>
    )
}

export default JobModal