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
  addSavedApi: (newApi: Api) => void;
}

const ApiContainer = ({ apis, selected, keyword, addSavedApi }: ApiContainerProps) => {
  let apiList = [];

  if (!keyword && !selected.length) {
    apiList = apis.map((api) => {
      return (
        <ApiCard
          key={api.id}
          api={api}
          addSavedApi={addSavedApi}
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
        />)
      }
      return acc;
    }, []);
  }

  return (
    <section className="api-section">
      <span className="apis-remain-text">{apiList.length} APIs Remain...</span>
      <div className="api-grid">
        {apiList}
      </div>
    </section>
  );
}

export default ApiContainer;