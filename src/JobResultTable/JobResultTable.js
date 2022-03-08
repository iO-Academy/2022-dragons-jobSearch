import SkillTag from "../SkillTag/SkillTag";
import {useState} from "react";
import Title from "../Title/Title";
import ContractTypeTag from "../ContractType/contractType";

const JobResultTable = ({jobData}) => {


    const jobArray = (jobData) => {
        let tableResults = jobData.map((result) => {


            return (
                <>

                    <div className="jobResultTable jobRow">
                        <div className="col1">
                            <img src={result.logo} className="companyLogo"/>
                            <div className="col1Text">
                                <h2>{result.job_title}</h2>
                                <h3>{result.company}</h3>
                            </div>
                        </div>
                        <div className="col2">
                            <ContractTypeTag contractType={result.type}/>
                        </div>
                        <div className="col3">
                            {result.salary !== null &&
                                <h4>£{parseInt(result.salary).toLocaleString("en-US")}</h4>
                            }
                        </div>
                        <div className="col4">

                            {result.skills.map((skill) => {
                                return <SkillTag skillTag={skill.skill} />
                            })}


                        </div>
                    </div>
                </>
            )
        })
        return tableResults
    }

    return (
        <>
            <div>
                <div className="title">
                    <h2>Most Recent Jobs</h2>
                </div>
                <div className="jobResultTable titleRow">
                    <div>
                        Job Title/Company
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

            </div>
        </>
    )
}

export default JobResultTable
