import './normalize.css'
import './App.scss';
import SkillTag from "./SkillTag/SkillTag";
import RecentJobs from "./RecentJobs/recentJobs";
import Title from "./Title/Title";
import ContractTypeTag from "./ContractType/contractType";

function App() {
    const recentJobs = "Most recent jobs"
    const skillTag = 'MySql'
    return (
        <>

            <Title recentJobs={recentJobs}/>
            <RecentJobs/>
            <SkillTag skillTag={skillTag} />
            <ContractTypeTag contractType={'Full Time'}/>
        </>
    )
}

export default App;

