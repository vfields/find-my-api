import { useState } from 'react';
import './Search.css';
import MultiSelect from '../MultiSelect/MultiSelect';

interface SearchProps {
  categories: string[];
}

const Search = ({ categories }: SearchProps) => {
  const [keyword, setKeyword] = useState<string>('')

  return (
    <form className="api-search-form">
      <MultiSelect
        categories={categories}
      />
      <input
        type="text"
        name="keyword"
        value={keyword}
        placeholder="Search By Keyword!"
        onChange={(event) => setKeyword(event.target.value)}
      />
    </form>
  );
}

export default Search;