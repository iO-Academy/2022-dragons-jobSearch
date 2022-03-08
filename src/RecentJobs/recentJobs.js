import {useState, useEffect} from "react"
import JobResultTable from "../JobResultTable/JobResultTable";


function RecentJobs() {

const [recentJobData, setRecentJobData] = useState([])

    const getRecentJobs = async () => {
        let response = await fetch('http://localhost:8080/jobs/recent')
        return await response.json()
    }

    useEffect(async () => {

        let jobData = await getRecentJobs()
        setRecentJobData(jobData)

    }, [])

    return (
        <>

            <JobResultTable jobData={recentJobData} recentJobs='recentJobs'/>
        </>
    )

}

export default RecentJobs




