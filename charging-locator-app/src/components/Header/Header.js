import './Header.css';
import Nav from '../Nav/Nav'

function Header() {
    return (
      <div>
        <h1 className='appName'>Charging Station Locator App</h1>
        <Nav />
      </div>
    );
  }
  
  export default Header;