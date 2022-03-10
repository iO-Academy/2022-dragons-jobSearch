import {useState} from 'react'

const ToggleJobsView = ({title, setTitle}) => {

    const [jobsView, setJobsView] = useState(true)

    const handleClick = () => {
        setJobsView(!jobsView)
        setTitle('All Jobs')
    }

    return (
        <>
            <button className='toggleJobsViewButton' onClick={handleClick}>{jobsView ? 'View All Jobs' : 'View Most Recent Jobs'} &#8594;</button>
        </>

    )
}

export default ToggleJobsView
