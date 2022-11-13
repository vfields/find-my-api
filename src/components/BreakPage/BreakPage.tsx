import { useState, useEffect } from 'react';
// import { Link, NavLink } from 'react-router-dom';
import './BreakPage.css';

// const telescope = require('../../assets/telescope.png');

const BreakPage = () => {
  const [dogUrl, setDogUrl] = useState<string>('');

  useEffect(() => {
    fetch (`https://random.dog/woof.json`)
      .then(response => response.json())
      .then(data => setDogUrl(data.url))
  }, [])


  // this can be its own component
  const dogDisplay = (url: string) => {
    if (url.slice(-3).toLowerCase() === 'mp4') {
      return (
        <video controls autoPlay muted>
          <source src={url} type="video/mp4" />
        </video>
      )
    } else {
      return (
        <img src={url} />
      )
    }
  }

  const getDog = () => {
    return fetch (`https://random.dog/woof.json`)
    .then(response => response.json())
    .then(data => setDogUrl(data.url))
  }

  return (
    <section className="break-section">
      <h1>Bootcamps are hard. It's okay to take a break!</h1>
      {dogDisplay(dogUrl)}
      <p>We hope these pups lift your spirits. You got this!</p>
      <button className="new-dog-btn" onClick={getDog}>New Doggo!</button>
    </section>
  );
}

export default BreakPage;