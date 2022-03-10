import {useState} from "react";
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

    async function getSearchResults(searchQ) {
        let response = await fetch(`http://localhost:8080/jobs?search=${searchQ}`)
        const jobData = await response.json()
        setSearchResults(jobData)
    }


    // function searchJobs() {
    //     setSearchQuery()
    //     let cleaned = sanitiseInput(searchQuery)
    //     searchQuery !== '' &&
    //         getSearchResults(cleaned) &&
    //     console.log(searchResults)
    // }

    return (
        <>
            <div className="searchBanner">
                <form>
                    <h1>Find your perfect job</h1>
                    <input type="text" />
                    <button>Search</button>
                </form>
            </div>

            <RecentJobs setModalShow={setModalShow} setJobId={setJobId} modalShow={modalShow} jobId={jobId} />
        </>
    )
}

export default SearchJobs

