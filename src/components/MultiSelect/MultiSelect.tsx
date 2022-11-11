import { Dispatch, useState, useRef } from 'react';
import './MultiSelect.css';
import useOnClickOutside from '../../useOnClickOutside';

interface MultiSelectProps {
  categoryError: string;
  categories: string[];
  selected: string[];
  setSelected: Dispatch<React.SetStateAction<string[]>>;
}

const MultiSelect = ({ categoryError, categories, selected, setSelected }: MultiSelectProps) => {
  const [showCategories, setShowCategories] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement | null>(null);

  const removeSelected = (name: string) => {
    const filteredSelected = selected.filter(selection => selection !== name);
    setSelected(filteredSelected);
  }

  const toggleSelected = (name: string) => {
    selected.includes(name) ? removeSelected(name) : setSelected([...selected, name]);
  }

  // potential to create a small component here
  const categoryOptions = categories.map((category, index) => {
    return (
      <label key={index} className="category-option">
        <input 
          className="category"
          type="checkbox"
          name={category}
          checked={selected.includes(category)}
          onChange={(event) => toggleSelected(event.target.name)}
        />
        {category}
      </label>
    )
  })

  // potential to create another small component here
  const selectedOptions = selected.map((selection, index) => {
    return (
      <article key={index}>
        <span onClick={() => removeSelected(selection)}>{selection} ❌</span>
      </article>
    )
  })

  useOnClickOutside(ref, () => setShowCategories(false));

  let selectText = '';
  if (!selected.length) {
    selectText = 'Search By Category!';
  } else if (selected.length === 1) {
    selectText = '1 Category Selected';
  } else {
    selectText = `${selected.length} Catgories Selected`;
  }

  return (
    <>
      <div className="select-category-dropdown" onClick={() => setShowCategories(true)}>
        <span className={selected.length ? 'category-selected-text' : 'search-by-category-text'}>{selectText}</span>
        <img src="https://cdn1.iconfinder.com/data/icons/arrows-vol-1-4/24/dropdown_arrow-1024.png" alt="drop down arrow icon" />
      </div>
      {showCategories && <div ref={ref} className="category-dropdown-display">{categoryError && categoryError} {categoryOptions}</div>}
      {selectedOptions}
    </>
  )
}

export default MultiSelect