import './ApiContainer.css';
import ApiCard from '../ApiCard/ApiCard';

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

interface ApiContainerProps {
  apis: Api[];
  selected: string[];
  keyword: string;
  loading: () => boolean;
  addSavedApi: (newApi: Api) => void;
  deleteSavedApi: (id: string) => void;
  isApiSaved: (id: string) => boolean;
}

const ApiContainer = ({ apis, selected, keyword, loading, addSavedApi, deleteSavedApi, isApiSaved }: ApiContainerProps) => {
  let apiList = [];

  if (!keyword && !selected.length) {
    apiList = apis.map((api) => {
      return (
        <ApiCard
          key={api.id}
          api={api}
          addSavedApi={addSavedApi}
          deleteSavedApi={deleteSavedApi}
          isApiSaved={isApiSaved}
        />
      )
    });
  } else if (selected.length) {
    apiList = apis.reduce((acc: Api[], api) => {
      if (selected.includes(api.category)) {
        acc.push(api)
      }
      return acc;
    }, [])
    .reduce((acc: JSX.Element[], api) => {
      if (api.title.toLowerCase().includes(keyword.toLowerCase()) || api.description.toLowerCase().includes(keyword.toLowerCase())) {
        acc.push(
        <ApiCard
          key={api.id}
          api={api}
          addSavedApi={addSavedApi}
          deleteSavedApi={deleteSavedApi}
          isApiSaved={isApiSaved}
        />)
      }
      return acc;
    }, []);
  } else {
    apiList = apis.reduce((acc: JSX.Element[], api) => {
      if (api.title.toLowerCase().includes(keyword.toLowerCase()) || api.description.toLowerCase().includes(keyword.toLowerCase())) {
        acc.push(
        <ApiCard
          key={api.id}
          api={api}
          addSavedApi={addSavedApi}
          deleteSavedApi={deleteSavedApi}
          isApiSaved={isApiSaved}
        />)
      }
      return acc;
    }, []);
  }
  
  const apiText = loading() ? 'Loading...' : `${apiList.length} APIs Remain...`

  return (
    <section className="api-section">
      <h1 className="apis-remain-text">{apiText}</h1>
      <div className="api-container">
      {apiList}
      </div>
    </section>
  );
}

export default ApiContainer;