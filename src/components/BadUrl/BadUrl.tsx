import { Link } from 'react-router-dom';
import './BadUrl.css';
import Nav from '../Nav/Nav';

const nightSky = require('../../assets/nightsky.gif');

const BadUrl = () => {
  return (
    <>
      <Nav />
      <section className='bad-url'>
        <h1 className='bad-url-header'>We can help you find an API, but we can't find that page anywhere!</h1>
        <img src={nightSky} alt='Two people standing side by side, gazing up at the twinkling night sky' className='bad-url-gif'/>
        <h3 className='bad-url-tag'>Looks like an invalid URL. Try going <Link to='/home'>home</Link> or a different address!</h3>
      </section>
    </>
  );
}

export default BadUrl;