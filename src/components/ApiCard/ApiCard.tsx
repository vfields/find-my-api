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
  api: Api;
  addSavedApi: (newApi: Api) => void;
  deleteSavedApi: (id: string) => void;
  isApiSaved: (id: string) => boolean;
}

const ApiCard = ({ api, addSavedApi, deleteSavedApi, isApiSaved }: ApiCardProps) => {
  const { id, title, description, auth, https, cors, url, category } = api;
  const authText = auth ? auth : 'no';
  const httpsText = https ? 'yes' : 'no';
  const apiStatus = isApiSaved(id);
  const btnText = apiStatus ? 'Remove From Saved' : 'Save This API';

  return (
    <article className='api-card' id={id}>
      <h2>Title: {title}</h2>
      <p>Description: {description}</p>
      <p><a href={url} target="_blank" rel="noopener">Visit API Docs!</a></p>
      <p>Auth: {authText}</p>
      <p>HTTPS: {httpsText}</p>
      <p>CORS: {cors}</p>
      <p>Category: {category}</p>
      <button onClick={apiStatus ? () => deleteSavedApi(id) : () => addSavedApi(api)}>{btnText}</button>
    </article>
  );
}

export default ApiCard;