import './Detail.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function Detail(props) {
  
  console.log('detail props:', props)

  let stationId = props.match.params.id;
  let stationData = props.results.find(value => 
    value.AddressInfo.ID == stationId
  )

  console.log('stationData:', stationData) 

  let address = {};
  let distance = "";
  let connections = {};

  if (stationData) {
    address = stationData.AddressInfo;
    distance = (Math.round(address.Distance * 10) / 10).toFixed(1);
    connections = stationData.Connections[0];
  }

  return (
    <div className='Detail'>
      {stationData ? 
        <div>
          <h2 className='title'>{address.Title}</h2>
          <div className='address'>
            <h5>Address</h5>
            <p>{address.AddressLine1}</p>
            <p>{address.Town}, {address.StateOrProvince} {address.Postcode}</p>
          </div>
          <div className='details'>
            <h5>Notes</h5>
            <p>Distance: {distance} mi</p>
            <p>{address.AccessComments}</p>
            <p>{stationData.GeneralComments}</p>
          </div>
          <div className='charge'>
            <h5>Charging Details</h5>
            <p>Number of Chargers: {connections.Quantity}</p>
            <p>Charging Level: {connections.LevelID}</p>
            <p>Volts: {connections.Voltage}</p>
            <p>Amps: {connections.Amps}</p>
            <p>Power (KW): {connections.PowerKW}</p>
          </div>
      <Link to='/'>
      <Button variant="secondary">
        <h5 className="button">Back to Results</h5>
      </Button>
      </Link>
        </div>
      : null }
    </div>
  )
}