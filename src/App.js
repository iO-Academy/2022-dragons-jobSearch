import './normalize.css'
import './App.scss';
import RecentJobs from "./RecentJobs/recentJobs";
import {useState} from 'react'


function App() {
    const [modalShow, setModalShow] = useState(false)
    const [jobId, setJobId] = useState('')
    return (
        <>
            <RecentJobs setModalShow={setModalShow} setJobId={setJobId} modalShow={modalShow} jobId={jobId} />
        </>
    )
}

export default App;

