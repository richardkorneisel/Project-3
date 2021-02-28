import './Results.css';
import ResultsList from '../ResultsList/ResultsList'

export default function Results(props) {

    return (
        <div className='Results'>
            <h2>Results</h2>
            <ResultsList results={props.results}/>
        </div>
    );
}
