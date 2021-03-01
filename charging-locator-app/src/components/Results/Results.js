import './Results.css';
import ResultsList from '../ResultsList/ResultsList'

export default function Results(props) {

    console.log('Results props:', props)
    return (
        <div className='Results'>
            <h2>Results</h2>
            <ResultsList {...props}/>
        </div>
    );
}
