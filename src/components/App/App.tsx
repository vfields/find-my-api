import React from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Search from '../Search/Search';
import Container from '../Container/Container';
import TrialSearch from '../TrialSearch/TrialSearch';


function App() {
  return (
    <main>
      <Nav />
      I am App
      <Search />
      <Container />
      <TrialSearch />
    </main>
  );
}

export default App;
