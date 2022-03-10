import {useState} from "react";
import RecentJobs from "../RecentJobs/recentJobs";

const SearchJobs = () => {
    const [modalShow, setModalShow] = useState(false)
    const [jobId, setJobId] = useState('')
    return (
        <>
            <RecentJobs setModalShow={setModalShow} setJobId={setJobId} modalShow={modalShow} jobId={jobId} />
        </>
    )
}

export default SearchJobs