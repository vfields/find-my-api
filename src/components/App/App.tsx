import { useState, useEffect } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import { getApiData } from '../../apiCalls';
import LandingPage from '../LandingPage/LandingPage';
import Nav from '../Nav/Nav';
import BreakPage from '../BreakPage/BreakPage';
import Search from '../Search/Search';
import ApiContainer from '../ApiContainer/ApiContainer';
import SavedContainer from '../SavedContainer/SavedContainer';
import BadUrl from '../BadUrl/BadUrl';

interface FetchedApi {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
}

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

function App() {
  const [apis, setApis] = useState<Api[]>([]);
  const [error, setError] = useState<string>('');
  const [categoryError, setCategoryError] = useState<string>('');
  const [categories, setCategories] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [keyword, setKeyword] = useState<string>('');
  const [auth, setAuth] = useState<string>('0');
  const [https, setHttps] = useState<string>('0');
  const [cors, setCors] = useState<string>('0');
  const [savedApis, setSavedApis] = useState<Api[]>([]);

  useEffect(() => {
    getApiData('entries')
      .then(data => {
        const cleanedData = data.entries.reduce((acc: Api[], api: FetchedApi) => {
          const uniqueId = `${api.API}_${api.Description.split(' ').length}_${api.Description.split(' ')[0]}`;
          const cleanedApi = {
            id: uniqueId,
            title: api.API,
            description: api.Description,
            auth: api.Auth,
            https: api.HTTPS,
            cors: api.Cors,
            url: api.Link,
            category: api.Category
          };
          acc.push(cleanedApi);
          return acc;
        }, [])
        setApis(cleanedData);
        setError('');
      })
      .catch(error => setError(`Oops, that's a ${error.message}! Something went wrong loading the APIs... please try again later.`))

    getApiData('categories')
      .then(data => {
        setCategories(data.categories)
        setCategoryError('')
      })
      .catch(error => setCategoryError(`Oops, that's a ${error.message}! Something went wrong loading the categories... please try again later.`))
  }, [])

  const addSavedApi = (newApi: Api) => {
    if (!savedApis.some(saved => saved.id === newApi.id)) {
      setSavedApis([...savedApis, newApi]);
    }
  }

  const deleteSavedApi = (id: string) => {
    const filteredSavedApis = savedApis.filter(saved => saved.id !== id);
    setSavedApis(filteredSavedApis);
  }

  const isApiSaved = (id: string) => {
    return savedApis.some(saved => saved.id === id) ? true : false;
  }

  const loading = () => {
    if (apis.length === 0 && !error) {
      return true
    }
    return false;
  }

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/home">
          <Nav />
          <Search
            categoryError={categoryError}
            categories={categories}
            selected={selected}
            keyword={keyword}
            auth={auth}
            cors={cors}
            https={https}
            setSelected={setSelected}
            setKeyword={setKeyword}
            setAuth={setAuth}
            setHttps={setHttps}
            setCors={setCors}
          />
          {error && <h2 className="error">{error}</h2>}
          <ApiContainer
            apis={apis}
            selected={selected}
            keyword={keyword}
            auth={auth}
            cors={cors}
            https={https}
            loading={loading}
            addSavedApi={addSavedApi}
            deleteSavedApi={deleteSavedApi}
            isApiSaved={isApiSaved}
          />
        </Route>
        <Route exact path="/saved">
          <Nav />
          <SavedContainer
            savedApis={savedApis}
            addSavedApi={addSavedApi}
            deleteSavedApi={deleteSavedApi}
            isApiSaved={isApiSaved}
          />
        </Route>
        <Route exact path="/break">
          <Nav />
          <BreakPage />
        </Route>
        <Route component={BadUrl} />
      </Switch>
    </main>
  );
}

export default App;
