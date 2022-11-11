import './ApiCard.css';

interface Api {
  id: string;
  title: string;
  description: string;
  auth: string;
  https: boolean;
  cors: string;
  url: string;
  category: string;
}


interface ApiCardProps {
  addSavedApi: (newApi: Api) => void;
  api: Api;
}

const ApiCard = ({ api, addSavedApi }: ApiCardProps) => {
  const { id, title, description, auth, https, cors, url, category } = api;
  const authText = auth ? auth : 'no';
  const httpsText = https ? 'yes' : 'no';
  return (
    <article className='api-card' id={id}>
      <h2>Title: {title}</h2>
      <p>Description: {description}</p>
      <p><a href={url}>Visit Api Docs!</a></p>
      <p>Auth: {authText}</p>
      <p>HTTPS: {httpsText}</p>
      <p>CORS: {cors}</p>
      <p>Category: {category}</p>
      <button onClick={() => addSavedApi(api)}>Save Api!</button>
    </article>
  );
}

export default ApiCard;