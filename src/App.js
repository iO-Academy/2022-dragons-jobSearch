import './normalize.css'
import './App.scss';
import SkillTag from "./SkillTag/SkillTag";

function App() {
    const skillTag = 'MySql'
    return(
        <SkillTag skillTag={skillTag} />
    )
}

export default App;
