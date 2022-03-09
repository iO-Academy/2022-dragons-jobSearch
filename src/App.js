import './normalize.css'
import './App.scss';
import RecentJobs from "./RecentJobs/recentJobs";
import Modal from "./ModalShow/ModalShow";

function App() {
    return (
        <>
            <Modal />
            <RecentJobs />
        </>
    )
}

export default App;

