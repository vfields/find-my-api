import { useState, useEffect } from 'react';
import './Search.css';

const Search = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    fetch('https://api.publicapis.org/categories')
      .then(response => response.json())
      .then(data => setCategories(data.categories))
  }, [])

  // can categories be called and stored in App?
  

  return (
    <form className="api-search-form">
      <select
        name="category"
        value={category}
        onChange={(event => setCategory(event.target.value))}
      >
        <option value="">--Choose A Category--</option>
        <option value="all">All Categories</option>
        {categories.map((category, index) => {
          return (
            <option key={index} value={category}>{category}</option>
          )
        })}
      </select>
      <input
        type="text" 
      />
    </form>
  );
}

export default Search;