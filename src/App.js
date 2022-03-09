import './normalize.css'
import './App.scss';
import RecentJobs from "./RecentJobs/recentJobs";
import {useState} from "react"

function App() {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <RecentJobs />
        </>
    )
}

export default App;

