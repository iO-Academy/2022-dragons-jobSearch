import {useState, useEffect} from "react"

function RecentJobs() {

const [RecentJobData, setRecentJobData] = useState("")

    const getRecentJobs = async () => {
        let response = await fetch('http://localhost:8080/jobs/recent')
        return await response.json()
    }

useEffect(async () => {

    let data = await getRecentJobs()
    console.log(data)


}, [])


    return (
        <>

        </>
    )

}

export default RecentJobs




