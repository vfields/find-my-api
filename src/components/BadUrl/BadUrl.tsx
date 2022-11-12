import { Link } from 'react-router-dom';
import './BadUrl.css';
import Nav from '../Nav/Nav'

const nightSky = require('../../assets/nightsky.gif');

const BadUrl = () => {
  return (
    <>
      <Nav />
      <section className="bad-url">
        <h1>We can help you find an API, but we can't find that page anywhere!</h1>
        <img src={nightSky} alt="Two people standing side by side, gazing up at the twinkling night sky" />
        <h3>Looks like an invalid URL. Try going <Link to="/home">home</Link> or a different address!</h3>
      </section>
    </>
  );
}

export default BadUrl;