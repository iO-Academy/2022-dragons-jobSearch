import {useState, useEffect} from "react"
import JobResultTable from "../JobResultTable/JobResultTable";


function RecentJobs() {

const [recentJobData, setRecentJobData] = useState([])



    useEffect(() => {
        const getRecentJobs = async () => {
            let response = await fetch('http://localhost:8080/jobs/recent')
            const jobData = await response.json()
            setRecentJobData(jobData)
        }

        getRecentJobs()
    }, [])

    return (
        <>
            <JobResultTable jobData={recentJobData} />
        </>
    )

}

export default RecentJobs


