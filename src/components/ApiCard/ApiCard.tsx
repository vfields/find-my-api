import { ApiCardProps } from '../../model';
import './ApiCard.css';

const ApiCard = ({ api, addSavedApi, deleteSavedApi, isApiSaved }: ApiCardProps) => {
  const { id, title, description, auth, https, cors, url, category } = api;
  const authText = auth ? auth : 'no';
  const httpsText = https ? 'yes' : 'no';
  const apiStatus = isApiSaved(id);
  const btnText = apiStatus ? 'Remove From Saved' : 'Save This API';

  return (
    <article className='api-card' id={id}>
      <h2>{title}</h2>
      <span className="description">{description}</span>
      <br />
      <a href={url} target="_blank" rel="noopener">Visit API Docs!</a>
      <p><span className="bold">Authentication:</span> {authText}</p>
      <p><span className="bold">HTTPS:</span> {httpsText}</p>
      <p><span className="bold">CORS:</span> {cors}</p>
      <p><span className="bold">Category:</span> {category}</p>
      <button className="manage-save-btn" onClick={apiStatus ? () => deleteSavedApi(id) : () => addSavedApi(api)}>{btnText}</button>
    </article>
  );
}

export default ApiCard;