import { Api, ApiContainerProps } from '../../model';
import './ApiContainer.css';
import ApiCard from '../ApiCard/ApiCard';

const ApiContainer = ({ apis, selected, keyword, auth, https, cors, loading, addSavedApi, deleteSavedApi, isApiSaved }: ApiContainerProps) => {
  let apiList = [];

  const checkKeyword = (word: string, list: Api[]) => {
    return list.reduce((acc: Api[], api: Api) => {
      if (api.title.toLowerCase().includes(keyword.toLowerCase()) || api.description.toLowerCase().includes(keyword.toLowerCase())) {
        acc.push(api);
      }
      return acc;
    }, []);
  }

  const checkCategories = (categoryList: string[], list: Api[]) => {
    if (categoryList.length) {
      return list.reduce((acc: Api[], api: Api) => {
        if (selected.includes(api.category)) {
          acc.push(api);
        }
        return acc;
      }, [])
    } else {
      return list;
    }
  }

  const checkAuth = (value: string, list: Api[]) => {
    if (value === '0') {
      return list;
    } else if (value === '1') {
      return list.filter(api => api.auth);
    } else {
      return list.filter(api => !api.auth);
    }
  }

  const checkHttps = (value: string, list: Api[]) => {
    if (value === '0') {
      return list;
    } else if (value === '1') {
      return list.filter(api => api.https);
    } else {
      return list.filter(api => !api.https);
    }
  }

  const checkCors = (value: string, list: Api[]) => {
    if (value === '0') {
      return list;
    } else if (value === '1') {
      return list.filter(api => api.cors === 'yes');
    } else {
      return list.filter(api => api.cors === 'no');
    }
  }

  const checkAll = (word: string, categoryList: string[], authValue: string, allApis: Api[]) => {
    let displayApis = checkKeyword(keyword, apis);
    displayApis = checkCategories(selected, displayApis);
    displayApis = checkAuth(auth, displayApis);
    displayApis = checkHttps(https, displayApis);
    displayApis = checkCors(cors, displayApis);
    return displayApis;
  }

  apiList = checkAll(keyword, selected, auth, apis).map((api) => {
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

  const apiSValue = apiList.length === 1 ? '' : 's';
  const remainSValue = apiSValue ? '' : 's';
  const apiText = loading() ? 'Loading...' : `${apiList.length} API${apiSValue} Remain${remainSValue}...`;

  return (
    <section className='api-section'>
      <h1 className='apis-remain-text'>{apiText}</h1>
      <div className='api-container'>
        {apiList}
      </div>
    </section>
  );
}

export default ApiContainer;