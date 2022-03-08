import {useState, useEffect} from "react"
import JobResultTable from "../JobResultTable/JobResultTable";
import Title from "../Title/Title";

function RecentJobs() {

const [RecentJobData, setRecentJobData] = useState([])

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

            <JobResultTable jobData={RecentJobData} recentJobs='recentJobs'/>
        </>
    )

}

export default RecentJobs




