import './ApiCard.css';

interface Api {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
}


interface ApiCardProps {
  title: string;
  description: string;
  category: string;
  addSavedApi: (newApi: Api) => void;
  api: Api;
}

const ApiCard = ({ title, description, category, addSavedApi, api }: ApiCardProps) => {
  return (
    <article className="api-card">
      <h2>Title: {title}</h2>
      <p>Description: {description}</p>
      <p>Category: {category}</p>
      <button onClick={() => addSavedApi(api)}>Save Api!</button>
    </article>
  );
}

export default ApiCard;