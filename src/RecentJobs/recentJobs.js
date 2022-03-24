import {useState, useEffect} from "react"
import JobResultTable from "../JobResultTable/JobResultTable";

function RecentJobs({setModalShow, setJobId, modalShow, jobId, jobData, setJobData, title, setTitle, jobsView, setJobsView}) {

    const getRecentJobs = async () => {
        let response = await fetch(process.env.REACT_APP_API_URL + '/jobs/recent')
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
                jobsView={jobsView}
                setJobsView={setJobsView}
                getRecentJobs={getRecentJobs}/>
        </>
    )

}

export default RecentJobs


