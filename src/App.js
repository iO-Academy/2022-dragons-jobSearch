import './normalize.css'
import './App.scss';
import {useState} from 'react'
import SearchJobs from "./SearchJobs/SearchJobs";
import ToggleJobsView from "./ToggleJobsView/ToggleJobsView";


function App() {
    return (
            <>
                <ToggleJobsView />
                <SearchJobs />
            </>
        )
}

export default App;

