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
  const [apis, setApis] = useState<Api[]>([])
  const [categories, setCategories] = useState<string[]>([]);

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
      />
      <h2>{apis.length} APIs Remain...</h2>
      <button>Show Me!</button>
      {/* on button click, APIs are displayed! */}
      <Container
        apis={apis}
      />
    </main>
  );
}

export default App;
