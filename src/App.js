import './normalize.css'
import './App.scss';
import RecentJobs from "./RecentJobs/recentJobs";
import Modal from "./ModalShow/ModalShow";
import {useState} from 'react'


function App() {
    const [modalShow, setModalShow] = useState(false)
    const [jobId, setJobId] = useState('')
    return (
        <>
            <Modal modalShow={modalShow} setModalShow={setModalShow} jobId={jobId} setJobId={setJobId} />
            <RecentJobs setModalShow={setModalShow} setJobId={setJobId} />
        </>
    )
}

export default App;

