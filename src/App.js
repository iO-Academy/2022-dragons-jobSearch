import './normalize.css'
import './App.scss';
import SearchJobs from "./SearchJobs/SearchJobs";
import NoResults from "./NoResults/NoResults";


function App() {
    return (
            <>
                <SearchJobs />
                <NoResults />
            </>
        )
}

export default App;

