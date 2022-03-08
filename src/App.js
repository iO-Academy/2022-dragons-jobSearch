import './normalize.css'
import './App.scss';
import SkillTag from "./SkillTag/SkillTag";
import RecentJobs from "./RecentJobs/recentJobs";
import Title from "./Title/Title";

function App() {
    const recentJobs = "Most recent jobs"
    const skillTag = 'MySql'
    return (
        <Title recentJobs={recentJobs}/>
        <RecentJobs/>
        <SkillTag skillTag={skillTag} />
    )
}

export default App;

