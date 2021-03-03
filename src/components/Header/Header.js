import {Link} from 'react-router-dom';
import './Header.css';
import Nav from '../Nav/Nav'


function Header() {
    return (
      <div className='Header'>
        <Link className= 'link' to = '/'>
          <h1 className='appName'>Charging Station Locator App</h1>
        </Link>
        <Nav />
      </div>
    );
  }
  
  export default Header;