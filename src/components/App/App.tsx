import { useState, useEffect } from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Search from '../Search/Search';
import Container from '../Container/Container';

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

  useEffect(() => {
    fetch(`https://api.publicapis.org/entries`)
      .then(response => response.json())
      .then(data => setApis(data.entries))
    
    fetch('https://api.publicapis.org/categories')
      .then(response => response.json())
      .then(data => setCategories(data.categories))
  }, [])

  return (
    <main>
      <Nav />
      I am App
      <Search
        categories={categories}
        selected={selected}
        keyword={keyword}
        setSelected={setSelected}
        setKeyword={setKeyword}
      />
      <Container
        apis={apis}
        selected={selected}
        keyword={keyword}
      />
    </main>
  );
}

export default App;
