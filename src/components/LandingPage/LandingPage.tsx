import { NavLink } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <section className="landing-page">
      <p>I am LandingPage.</p>
      <NavLink exact to="/home"><button>Get Started</button></NavLink>
    </section>
  );
}

export default LandingPage;