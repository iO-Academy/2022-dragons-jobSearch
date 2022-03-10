import {useState, useEffect} from "react"
import JobResultTable from "../JobResultTable/JobResultTable";


function RecentJobs({setModalShow, setJobId, modalShow, jobId, jobData, setJobData, title, setTitle}) {


    const getRecentJobs = async () => {
        let response = await fetch('http://localhost:8080/jobs/recent')
        const jobDataJson = await response.json()
        setJobData(jobDataJson)
    }

    useEffect(() => {

        getRecentJobs()
    }, [])

    return (
        <>
            <JobResultTable
                jobData={jobData}
                recentJobs='recentJobs'
                setModalShow={setModalShow}
                setJobId={setJobId}
                modalShow={modalShow}
                jobId={jobId}
                setJobData={setJobData}
                title={title}
                setTitle={setTitle}
                getRecentJobs={getRecentJobs}/>
        </>
    )

}

export default RecentJobs


