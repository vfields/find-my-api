import { useState, useEffect } from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Search from '../Search/Search';
import ApiContainer from '../ApiContainer/ApiContainer';
import SavedContainer from '../SavedContainer/SavedContainer';

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
  const [categories, setCategories] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [keyword, setKeyword] = useState<string>('');
  const [savedApis, setSavedApis] = useState<Api[]>([]);

  useEffect(() => {
    fetch(`https://api.publicapis.org/entries`)
      .then(response => response.json())
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
      })
    
    fetch('https://api.publicapis.org/categories')
      .then(response => response.json())
      .then(data => setCategories(data.categories))
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

  return (
    <main>
      <Nav />
      <Search
        categories={categories}
        selected={selected}
        keyword={keyword}
        setSelected={setSelected}
        setKeyword={setKeyword}
      />
      <ApiContainer
        apis={apis}
        selected={selected}
        keyword={keyword}
        addSavedApi={addSavedApi}
        deleteSavedApi={deleteSavedApi}
        isApiSaved={isApiSaved}
      />
      <SavedContainer
        savedApis={savedApis}
        addSavedApi={addSavedApi}
        deleteSavedApi={deleteSavedApi}
        isApiSaved={isApiSaved}
      />
    </main>
  );
}

export default App;
