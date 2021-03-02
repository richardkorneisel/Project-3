import './Results.css';
import ResultsList from '../ResultsList/ResultsList'

export default function Results(props) {

    // console.log('Results props:', props)
    return (
        <div className='Results'>
            
            <ResultsList {...props}/>
        </div>
    );
}
