import { Dispatch, useState } from 'react';
import './Search.css';
import MultiSelect from '../MultiSelect/MultiSelect';

interface SearchProps {
  categories: string[];
  selected: string[];
  keyword: string;
  setSelected: Dispatch<React.SetStateAction<string[]>>;
  setKeyword: Dispatch<React.SetStateAction<string>>;
}

const Search = ({ categories, selected, keyword, setSelected, setKeyword  }: SearchProps) => {
  const [selectedAll, setSelectedAll] = useState<boolean>(false);

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
    </form>
  );
}

export default Search;