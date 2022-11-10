import { useState, useEffect } from 'react';
import './Search.css';
import MultiSelect from '../MultiSelect/MultiSelect';

const Search = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    fetch('https://api.publicapis.org/categories')
      .then(response => response.json())
      .then(data => setCategories(data.categories))
  }, [])

  // can categories be called and stored in App?

  const [selected, setSelected] = useState<string[]>([])

  const data = [
    {
      id: 1, title: 'category 1'
    },
    {
      id: 2, title: 'category 2'
    }
  ]

  const toggleSelected = (name: string) => {
    if (selected.includes(name)) {
      const newSelections = selected.filter(selection => selection !== name);
      setSelected(newSelections);
    } else {
      setSelected([...selected, name])
    }
  }
  

  return (
    <form className="api-search-form">
      <MultiSelect
        data={data}
        selected={selected}
        toggleSelected={toggleSelected}
      />
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