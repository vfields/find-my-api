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
  auth: string;
  loading: () => boolean;
  addSavedApi: (newApi: Api) => void;
  deleteSavedApi: (id: string) => void;
  isApiSaved: (id: string) => boolean;
}

const ApiContainer = ({ apis, selected, keyword, auth, loading, addSavedApi, deleteSavedApi, isApiSaved }: ApiContainerProps) => {
  let apiList = [];

  const checkKeyword = (word: string, list: Api[]) => {
    return list.reduce((acc: Api[], api: Api) => {
      if (api.title.toLowerCase().includes(keyword.toLowerCase()) || api.description.toLowerCase().includes(keyword.toLowerCase())) {
        acc.push(api);
      }
      return acc;
    }, [])
  }

  const checkCategories = (categoryList: string[], list: Api[]) => {
    if (categoryList.length) {
      return list.reduce((acc: Api[], api: Api) => {
        if (selected.includes(api.category)) {
          acc.push(api)
        }
        return acc;
      }, [])
    } else {
      return list;
    }
  }

  const checkAuth = (value: string, list: Api[]) => {
    if (value === "0") {
      return list;
    } else if (value === "1") {
      return list.filter(api => api.auth)
    } else {
      return list.filter(api => !api.auth)
    }
  }

  const checkAll = (word: string, categoryList: string[], authValue: string, allApis: Api[]) => {
    let displayApis = checkKeyword(keyword, apis);
    displayApis = checkCategories(selected, displayApis);
    displayApis = checkAuth(auth, displayApis);
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
  })

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

/*

THIS WORKS:

const checkAll = (word: string, categoryList: string[], authValue: string, allApis: Api[]) => {
    let keyWordApis = allApis.reduce((acc: Api[], api: Api) => {
      if (api.title.toLowerCase().includes(keyword.toLowerCase()) || api.description.toLowerCase().includes(keyword.toLowerCase())) {
        acc.push(api);
      }
      return acc;
    }, []);

    if (categoryList.length) {
      keyWordApis = keyWordApis.reduce((acc: Api[], api: Api) => {
        if (selected.includes(api.category)) {
          acc.push(api)
        }
        return acc;
      }, [])
    }

    if (authValue === "1") {
      keyWordApis = keyWordApis.filter(api => api.auth)
    } else if (authValue === "2") {
      keyWordApis = keyWordApis.filter(api => !api.auth)
    }

    return keyWordApis;
  }

FUNCTION LIST:

  const checkKeyword = (word: string, list: Api[]) => {
    return list.reduce((acc: Api[], api: Api) => {
      if (api.title.toLowerCase().includes(keyword.toLowerCase()) || api.description.toLowerCase().includes(keyword.toLowerCase())) {
        acc.push(api);
      }
      return acc;
    }, [])
  }

  const checkCategories = (categoryList: string[], list: Api[]) => {
    if (categoryList.length) {
      return list.reduce((acc: Api[], api: Api) => {
        if (selected.includes(api.category)) {
          acc.push(api)
        }
        return acc;
      }, [])
    } else {
      return list;
    }
  }

  const checkAuth = (value: string, list: Api[]) => {
    if (value === "0") {
      return list;
    } else if (value === "1") {
      return list.filter(api => api.auth)
    } else {
      return list.filter(api => !api.auth)
    }
  }

UNIQUE API LOGIC:

  let uniqueApiIds: string[] = [];
  const uniqueApiList = apiList.filter(api => {
    if (!uniqueApiIds.includes(api.id)) {
      uniqueApiIds.push(api.id)
      return true;
    }
    return false;
  })

ORIGINAL LOGIC:

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

*/