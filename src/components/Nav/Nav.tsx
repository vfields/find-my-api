import { NavLink } from 'react-router-dom';
import './Nav.css';

const telescope = require('../../assets/telescope.png');

const Nav = () => {
  return (
    <nav className="main-navigation">
      <div className="logo-container">
        <img src={telescope} alt="golden outline of a telescope" />
      </div>
      <div className="text-container">
        <span className="logo-text">Find My API</span>
        <NavLink exact to="/home" className="inactive home">Home</NavLink> | <NavLink exact to="/saved" className="inactive saved">Saved APIs</NavLink>
      </div>
    </nav>
  );
}

export default Nav;