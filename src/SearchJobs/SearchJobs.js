import {useEffect, useState} from "react";
import RecentJobs from "../RecentJobs/recentJobs";

const SearchJobs = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [modalShow, setModalShow] = useState(false)
    const [jobId, setJobId] = useState('')

    function sanitiseInput(str) {
        let noSpecialCharacters = str.replace(/[^a-zA-Z0-9 ]/g, '')
        return noSpecialCharacters
    }

    useEffect(() => {
        console.log(searchResults)
    }, [searchResults])

    async function getSearchResults(searchQ) {
        let response = await fetch('http://localhost:8080/jobs?search=' + searchQ)
        const jobData = await response.json()
        setSearchResults(jobData)
    }

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }


    const searchJobs = (e) => {
        e.preventDefault()
        let cleaned = sanitiseInput(searchQuery)
        searchQuery !== '' &&
            getSearchResults(cleaned)
    }

    return (
        <>
            <div className="searchBanner">
                <form>
                    <h1>Find your perfect job</h1>
                    <input type="text" onChange={handleChange}/>
                    <button onClick={searchJobs}>Search</button>
                </form>
            </div>

            <RecentJobs setModalShow={setModalShow} setJobId={setJobId} modalShow={modalShow} jobId={jobId} />
        </>
    )
}

export default SearchJobs

