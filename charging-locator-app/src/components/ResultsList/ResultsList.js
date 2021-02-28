import './ResultsList.css';
import ResultCard from '../ResultCard/ResultCard'

export default function ResultsList(props) {

    console.log('ResultsList props.results:', props.results)

    let resultCards = props.results.results.map((value, index) => {
        return (
            <ResultCard value={value} index={index} />
        )
    })

    return (
        <div className='ResultsList'>
            <h1>ResultsList</h1>
            <div className='ResultCards'>
                {resultCards}
            </div>
        </div>
    );
}
