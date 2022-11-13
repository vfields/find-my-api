import './DogDisplay.css';

interface DogDisplayProps {
  url: string;
}

const DogDisplay = ({ url }: DogDisplayProps) => {
  if (url.slice(-3).toLowerCase() === 'mp4') {
    return (
      <video className="dog-display" controls autoPlay muted>
        <source src={url} type="video/mp4" />
      </video>
    )
  } else {
    return (
      <img className="dog-display" src={url} />
    )
  }
}

export default DogDisplay;