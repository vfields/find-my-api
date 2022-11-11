import { useState, useEffect } from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Search from '../Search/Search';
import ApiContainer from '../ApiContainer/ApiContainer';
import SavedContainer from '../SavedContainer/SavedContainer';

interface Api {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
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
      .then(data => setApis(data.entries))
    
    fetch('https://api.publicapis.org/categories')
      .then(response => response.json())
      .then(data => setCategories(data.categories))
  }, [])

  const addSavedApi = (newApi: Api) => {
    setSavedApis([...savedApis, newApi])
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
      />
      <SavedContainer />
    </main>
  );
}

export default App;
