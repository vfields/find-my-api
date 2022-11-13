import { Link, NavLink } from 'react-router-dom';
import './Nav.css';

const telescope = require('../../assets/telescope.png');

const Nav = () => {
  return (
    <nav className="main-navigation">
      <div className="logo-container">
        <Link to="/"><img src={telescope} alt="golden outline of a telescope" /></Link>
      </div>
      <div className="text-container">
        <span className="logo-text">Find My API</span>
        <NavLink exact to="/home" className="inactive home">Home</NavLink> | <NavLink exact to="/saved" className="inactive saved">Saved APIs</NavLink> | <NavLink exact to="/break" className="inactive home">Break</NavLink>
      </div>
    </nav>
  );
}

export default Nav;