import { useState } from 'react';
import './Search.css';
import MultiSelect from '../MultiSelect/MultiSelect';

interface SearchProps {
  categories: string[];
}

const Search = ({ categories }: SearchProps) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [selectedAll, setSelectedAll] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (!selected.length && !selectedAll) {
      // no categories selected
    } else if (selected.length && !keyword) {
      // categor(ies) selected, but no keywords
    } else if (selected.length && keyword) {
      // categor(ies) selected AND keyword entered
    } else if (selectedAll && !keyword) {
      // selected all categories, but no keyword entered
    } else if (selectedAll && keyword) {
      // selected all categories, AND keyword entered
    }
    // clear the form
  }

  return (
    <form className="api-search-form">
      <MultiSelect
        categories={categories}
        selected={selected}
        setSelected={setSelected}
        selectedAll={selectedAll}
        setSelectedAll={setSelectedAll}
      />
      <input
        type="text"
        name="keyword"
        value={keyword}
        placeholder="Search By Keyword!"
        onChange={(event) => setKeyword(event.target.value)}
      />
      <button type="submit" onClick={handleClick}>Find My Api!</button>
      {error && <h2>{error}</h2>}
    </form>
  );
}

export default Search;