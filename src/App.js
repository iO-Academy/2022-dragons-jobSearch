import './normalize.css'
import './App.scss';
import RecentJobs from "./RecentJobs/recentJobs";
import Title from "./Title/Title";

function App() {
    const recentJobs = "Most recent jobs"
    return (
        <Title recentJobs={recentJobs}/>
        <RecentJobs/>
    )
}

export default App;

