import './ResultCard.css';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

export default function ResultCard(props) {

  // console.log('result props.value', props.value)
  // console.log('result props.index', props.index)

  const address = props.value.AddressInfo;

  const distance = (Math.round(address.Distance * 10) / 10).toFixed(1);

  // console.log('distance', distance)

  return (
    <Card style={{width: '18rem' }} className='ResultCard' key={props.index}>
      <Card.Body className='flex-column d-flex'>
          <Card.Title>{address.Title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{distance} mi</Card.Subtitle>
          <Card.Text>
            <div className='address'>
              <p>{address.AddressLine1}</p>
              <p>{address.Town} {address.StateOrProvince}, {address.Postcode}</p>
              </div>
              <p className='notes'>{address.AccessComments}</p>
          </Card.Text>
          <Button variant="success" className='button mt-auto'>
            <Link to={`/${address.ID}`} className='buttonLink'>Details</Link>
          </Button>{' '}
      </Card.Body>
    </Card>
  )
}
