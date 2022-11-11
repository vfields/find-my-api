import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="main-navigation">
      <NavLink exact to="/">Home</NavLink> | <NavLink exact to="/saved">Saved APIs</NavLink>
    </nav>
  );
}

export default Nav;