import './ResultCard.css';
import { Link } from 'react-router-dom';

export default function ResultCard(props) {

  // console.log('result props.value', props.value)
  // console.log('result props.index', props.index)

  const address = props.value.AddressInfo;

  const distance = (Math.round(address.Distance * 10) / 10).toFixed(1);

  // console.log('distance', distance)

  return (
    <div className='ResultCard' key={address.ID}>
      <h2 className='title'>{address.Title}</h2>
      <div className='address'>
        <p>{address.AddressLine1}</p>
        <p>{address.Town}</p>
        <p>{address.StateOrProvince}</p>
        <p>{address.Postcode}</p>
      </div>
      <div className='details'>
        <p>Distance: {distance} mi</p>
        <p>Notes: {address.AccessComments}</p>
      </div>
      <Link to={`/detail/${address.ID}`}>
        <h3 className='button'>Details</h3>
      </Link>
    </div>
  )
}
