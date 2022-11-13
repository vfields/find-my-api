import './DogDisplay.css';

interface DogDisplayProps {
  url: string;
}

const DogDisplay = ({ url }: DogDisplayProps) => {
  if (url.slice(-3).toLowerCase() === 'mp4') {
    return (
      <video className="dog-display" controls autoPlay muted>
        <source src={url} type="video/mp4" />
        <p>This is a randomly selected video of a dog meant to cheer you up! Your browser may not support videos.</p>
      </video>
    )
  } else {
    return (
      <img className="dog-display" src={url} alt="a randomly selected photo of a dog meant to cheer you up" />
    )
  }
}

export default DogDisplay;