import SkillTag from "../SkillTag/SkillTag";
import ContractTypeTag from "../ContractType/contractType";
import uniqid from 'uniqid';
import JobModal from "../JobModal/JobModal";
import Title from "../Title/Title"
import ToggleJobsView from "../ToggleJobsView/ToggleJobsView";
import NoResults from "../NoResults/NoResults"

const JobResultTable = ({jobData, setModalShow, setJobId, modalShow, jobId, title, setTitle, setJobData, getRecentJobs, jobsView, setJobsView}) => {
    const jobArray = (jobData) => {
        let tableResults = jobData.map((result) => {
        let contractType = result.type
        const openModal = () => {
            setModalShow(true)
            setJobId(result.id)
        }
            return (
                    <div className="jobResultTable jobRow" key={uniqid()}>
                        <div className="col1">
                            <img alt="companyLogo" src={result.logo} className="companyLogo"/>
                            <div className="col1Text">
                                <button onClick={openModal}>{result.job_title}</button>
                                <h3>{result.company}</h3>
                            </div>
                        </div>
                        <div className="col2">
                            {contractType !== null &&
                                <ContractTypeTag contractType={contractType}/>
                            }
                        </div>
                        <div className="col3">
                            {result.salary !== null &&
                                <h4>£{parseInt(result.salary).toLocaleString("en-US")}</h4>
                            }
                        </div>
                        <div className="col4">

                            {result.skills.map((skill) => {
                                return <SkillTag key={uniqid()} skillTag={skill.skill} />
                            })}
                        </div>
                    </div>

            )
        })

        if (jobData.length === 0) {
            return (<NoResults/>)
        } else {
            return tableResults
        }
    }

    return (
        <>
            <section>
                <div className="title">
                    <Title title={title}/>
                    <ToggleJobsView title={title} setTitle={setTitle} setJobData={setJobData} getRecentJobs={getRecentJobs} jobsView={jobsView} setJobsView={setJobsView}/>
                </div>
                <div className="jobResultTable titleRow">
                    <div>
                        Job Title / Company
                    </div>
                    <div>
                        Type
                    </div>
                    <div>
                        Salary
                    </div>
                    <div>
                        Skills
                    </div>
                </div>

                    {jobArray(jobData)}
                <JobModal modalShow={modalShow} setModalShow={setModalShow} jobId={jobId} />
            </section>
        </>
    )
}

export default JobResultTable
