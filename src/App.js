import './normalize.css'
import './App.scss';
import RecentJobs from "./RecentJobs/recentJobs";
import Title from "./Title/Title";
import ContractTypeTag from "./ContractType/contractType";

function App() {
    const recentJobs = "Most recent jobs"
    return (
        <>
        <Title recentJobs={recentJobs}/>
        <RecentJobs/>
        <ContractTypeTag contractType={null}/>
        </>
    )
}

export default App;

