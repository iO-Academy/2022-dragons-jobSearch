const JobResultTable = ({testTable}) => {

    const testArray = (testTable) => {
        let tableResults = testTable.map((result) => {
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
                            <h4>{result.type}</h4>
                        </div>
                        <div className="col3">
                            {result.salary !== null ? <h4>£{parseInt(result.salary).toLocaleString("en-US")}</h4> : <h4></h4>}
                        </div>
                        <div className="col4">
                            <h4>Skills</h4>
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

                    {testArray(testTable)}


            </div>
        </>
    )
}

export default JobResultTable
