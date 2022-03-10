import {useEffect, useState} from "react";
import RecentJobs from "../RecentJobs/recentJobs";



const SearchJobs = () => {

    const [jobData, setJobData] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [modalShow, setModalShow] = useState(false)
    const [jobId, setJobId] = useState('')
    const [title, setTitle] = useState('')
    const [displayResults, setDisplayResults] = useState(true)

    useEffect(() => {
        setTitle('Most Recent Jobs')
    }, [])

    function sanitiseInput(str) {
        let noSpecialCharacters = str.replace(/[^a-zA-Z0-9 ]/g, '')
        return noSpecialCharacters
    }

    useEffect(() => {
        console.log(searchResults)
        setJobData(searchResults)
    }, [searchResults])

    async function getSearchResults(searchQuery) {
        let response = await fetch('http://localhost:8080/jobs?search=' + searchQuery)
        const jobData = await response.json()
        setSearchResults(jobData)
    }

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }


    const searchJobs = (e) => {
        e.preventDefault()
        let cleaned = sanitiseInput(searchQuery)
        if (searchQuery !== '') {
            getSearchResults(cleaned)
            setTitle('Search Results')

        }
    }


    return (
        <>
            <div className="searchBanner">
                <form>
                    <h1>Find your perfect job</h1>
                    <input type="text" placeholder="job title / keyword / company" onChange={handleChange} />
                    <button onClick={searchJobs}>Search</button>
                </form>
            </div>

            <RecentJobs setModalShow={setModalShow}
                        setJobId={setJobId}
                        modalShow={modalShow}
                        jobId={jobId}
                        jobData={jobData}
                        setJobData={setJobData}
                        title={title}

                        setTitle={setTitle}
                        displayResults={displayResults}
                        setDisplayResults={setDisplayResults}/>
        </>
    )
}

export default SearchJobs

