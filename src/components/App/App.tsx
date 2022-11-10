import { useState, useEffect } from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Search from '../Search/Search';
import Container from '../Container/Container';
import TrialSearch from '../TrialSearch/TrialSearch';


function App() {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetch('https://api.publicapis.org/categories')
      .then(response => response.json())
      .then(data => setCategories(data.categories))
  }, [])

  return (
    <main>
      <Nav />
      I am App
      <Search />
      <Container />
      <TrialSearch
        categories={categories}
      />
    </main>
  );
}

export default App;
