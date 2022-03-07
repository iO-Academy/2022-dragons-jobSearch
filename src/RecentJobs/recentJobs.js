import {useState} from "react"

function RecentJobs() {

const [RecentJobData, setRecentJobData] = useState("")

useEffect(() => {

    const getRecentJobs = async () => {
        let response = await fetch('http://localhost:8080/jobs/recent')
        return await response.json()
    }

    async function getRecentJobData(){
        let recentJobs = getRecentJobs()
        await recentJobs
        console.log(recentJobs)
    }

    getRecentJobData()

}, [])

    return (
        <>
        </>
    )

}

export default RecentJobs




