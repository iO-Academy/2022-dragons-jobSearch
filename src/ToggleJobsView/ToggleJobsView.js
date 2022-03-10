import {useState} from 'react'

const ToggleJobsView = () => {

    const [jobsView, setJobsView] = useState(true)

    const handleClick = () => {
        setJobsView(!jobsView)
    }

    return (
        <>
            <button className='toggleJobsViewButton' onClick={handleClick}>{jobsView ? 'View All Jobs' : 'View Most Recent Jobs'} &#8594;</button>
        </>

    )
}

export default ToggleJobsView
