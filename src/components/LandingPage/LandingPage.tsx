import { NavLink } from 'react-router-dom';
import './LandingPage.css';

const telescope = require('../../assets/telescope.png');

const LandingPage = () => {
  return (
    <section className="landing-page">
      <img src={telescope} alt="golden outline of a telescope" />
      <h1 className="header-text">Find My API</h1>
      <h2 className="tag-text">Bootcamps are hard enough.<br />Finding an API should be easier!</h2>
      <p className="sub-tag-text">Search over 1,000+ free, public APIs by keyword, category, authentication requirements, and more. <br />Save your favorites, and get started on your project sooner!</p>
      <NavLink exact to="/home"><button className="get-started-btn">Get Started</button></NavLink>
    </section>
  );
}

export default LandingPage;