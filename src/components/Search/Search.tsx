import { Dispatch } from 'react';
import './Search.css';
import MultiSelect from '../MultiSelect/MultiSelect';

interface SearchProps {
  categoryError: string;
  categories: string[];
  selected: string[];
  keyword: string;
  setSelected: Dispatch<React.SetStateAction<string[]>>;
  setKeyword: Dispatch<React.SetStateAction<string>>;
}

const Search = ({ categoryError, categories, selected, keyword, setSelected, setKeyword  }: SearchProps) => {
  const clearForm = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setSelected([]);
    setKeyword('');
  }

  let disableBtn = true;
  if (keyword || selected.length) {
    disableBtn = false;
  }

  return (
    <form className="api-search-form">
      <MultiSelect
        categoryError={categoryError}
        categories={categories}
        selected={selected}
        setSelected={setSelected}
      />
      <input
        className="keyword-input"
        type="text"
        name="keyword"
        value={keyword}
        placeholder="Search By Keyword!"
        onChange={(event) => setKeyword(event.target.value)}
      />
      <button disabled={disableBtn} className="clear-search-btn" onClick={clearForm}>Clear My Search!</button>
    </form>
  );
}

export default Search;