import './ApiCard.css';

interface ApiCardProps {
  title: string;
  description: string;
  category: string;
}

const ApiCard = ({ title, description, category }: ApiCardProps) => {
  return (
    <article className="api-card">
      <h2>Title: {title}</h2>
      <p>Description: {description}</p>
      <p>Category: {category}</p>
    </article>
  );
}

export default ApiCard;