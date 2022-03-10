import {useState} from 'react'

const ToggleJobsView = ({title, setTitle, setJobData, getRecentJobs}) => {

    const [jobsView, setJobsView] = useState(true)

    async function getAllJobs() {
        let response = await fetch('http://localhost:8080/jobs')
        const jobData = await response.json()
        setJobData(jobData)
    }

    const handleClick = () => {
        //Change jobsView value to opposite of current value (only works with boolean)
        setJobsView(!jobsView)
        if (jobsView){
            setTitle('All Jobs')
            getAllJobs()
        }  else {
            setTitle('Most Recent Jobs')
            getRecentJobs()

        }

    }

    return (
        <>
            <button className='toggleJobsViewButton' onClick={handleClick}>{jobsView ? 'View All Jobs' : 'View Most Recent Jobs'} &#8594;</button>
        </>

    )
}

export default ToggleJobsView
