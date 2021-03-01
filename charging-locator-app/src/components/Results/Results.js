import './Results.css';
import ResultsList from '../ResultsList/ResultsList'

function Results() {
    return (
        <div className= 'resultsContainer'>
            <h2>Search Results</h2>
            <ResultsList/>
        </div>
    );
}

export default Results;