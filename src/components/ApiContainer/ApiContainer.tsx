import './ApiContainer.css';
import ApiCard from '../ApiCard/ApiCard';

interface Api {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
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
    apiList = apis.map((api, index) => {
      return (
        <ApiCard
          key={index}
          title={api.API}
          description={api.Description}
          category={api.Category}
          api={api}
          addSavedApi={addSavedApi}
        />
      )
    });
  } else if (selected.length) {
    apiList = apis.reduce((acc: Api[], api, index) => {
      if (selected.includes(api.Category)) {
        acc.push(api)
      }
      return acc;
    }, [])
    .reduce((acc: JSX.Element[], api, index) => {
      if (api.API.toLowerCase().includes(keyword.toLowerCase()) || api.Description.toLowerCase().includes(keyword.toLowerCase())) {
        const uniqueKey = Date.now() + index;
        acc.push(
        <ApiCard
          key={uniqueKey}
          title={api.API}
          description={api.Description}
          category={api.Category}
          api={api}
          addSavedApi={addSavedApi}
        />)
      }
      return acc;
    }, []);
  } else {
    apiList = apis.reduce((acc: JSX.Element[], api, index) => {
      if (api.API.toLowerCase().includes(keyword.toLowerCase()) || api.Description.toLowerCase().includes(keyword.toLowerCase())) {
        const uniqueKey = Date.now() + index;
        acc.push(
        <ApiCard
          key={uniqueKey}
          title={api.API}
          description={api.Description}
          category={api.Category}
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