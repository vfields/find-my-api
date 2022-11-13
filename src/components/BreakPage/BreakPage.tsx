import { useState, useEffect } from 'react';
import './BreakPage.css';
import { getDog } from '../../apiCalls';
import DogDisplay from '../DogDisplay/DogDisplay';

const BreakPage = () => {
  const [dogUrl, setDogUrl] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    handleClick();
  }, [])

  const handleClick = () => {
    getDog()
      .then(data => {
        setDogUrl(data.url);
        setError('');
      })
      .catch(error => setError(`Uh oh, that's a ${error.message}! We're sorry, we're having trouble displaying the doggos. Please try again!`))
  }

  return (
    <section className="break-section">
      <h1 className="break-header">Bootcamps are hard. It's okay to take a break!</h1>
      {error && <h3 className="error">{error}</h3>}
      <DogDisplay
        url={dogUrl} 
      />
      <p>We hope these pups lift your spirits. You got this!</p>
      <button className="new-dog-btn" onClick={handleClick}>New Doggo!</button>
    </section>
  );
}

export default BreakPage;