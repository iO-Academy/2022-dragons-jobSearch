import './normalize.css'
import './App.scss';
import Title from "./Title/Title";

function App() {
    const recentJobs = "Most recent jobs"
    return (
        <Title recentJobs={recentJobs}/>
    )
}

export default App;
