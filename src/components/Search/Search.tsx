import { Dispatch } from 'react';
import './Search.css';
import MultiSelect from '../MultiSelect/MultiSelect';

interface SearchProps {
  categoryError: string;
  categories: string[];
  selected: string[];
  keyword: string;
  auth: string;
  setSelected: Dispatch<React.SetStateAction<string[]>>;
  setKeyword: Dispatch<React.SetStateAction<string>>;
  setAuth: Dispatch<React.SetStateAction<string>>;
}

const Search = ({ categoryError, categories, selected, keyword, auth, setSelected, setKeyword, setAuth  }: SearchProps) => {
  const clearForm = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setSelected([]);
    setKeyword('');
    setAuth('0');
  }

  let disableBtn = true;
  if (keyword || selected.length || auth !== "0") {
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
      <br />
      <div className="auth-radio-container">
        <span className="auth-req-text">Authentication Required:</span>
        <label className="auth-radio">
          <input 
            type="radio"
            name="authentication"
            value="1"
            checked={auth === "1"}
            onChange={(event) => setAuth(event.target.value)}
          /> Yes
        </label>
        <label className="auth-radio">
        <input 
          type="radio"
          name="authentication"
          value="2"
          checked={auth === "2"}
          onChange={(event) => setAuth(event.target.value)}
        /> No
        </label>
        <label className="auth-radio">
          <input 
            type="radio"
            name="authentication"
            value="0"
            checked={auth === "0"}
            onChange={(event) => setAuth(event.target.value)}
          /> Either
        </label>
      </div>
      <button disabled={disableBtn} className="clear-search-btn" onClick={clearForm}>Clear My Search!</button>
    </form>
  );
}

export default Search;