import { useState, useRef } from 'react';
import './MultiSelect.css';
import useOnClickOutside from '../../useOnClickOutside';

interface MultiSelectProps {
  categories: string[];
}

const MultiSelect = ({ categories }: MultiSelectProps) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [selectedAll, setSelectedAll] = useState<boolean>(false);
  const [showCategories, setShowCategories] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement | null>(null);

  const removeSelected = (name: string) => {
    const filteredSelected = selected.filter(selection => selection !== name);
    setSelected(filteredSelected);
  }

  const toggleSelected = (name: string) => {
    if (name === "all") {
      setSelected([]);
      setSelectedAll(!selectedAll);
      manageInputs();
    }
    else if (selected.includes(name)) {
      removeSelected(name);
    } 
    else {
      setSelected([...selected, name]);
    }
  }

  const manageInputs = () => {
    const inputs = Array.from(document.querySelectorAll('.category'));
    inputs.forEach(input => {
      input.toggleAttribute('disabled');
    });
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
          disabled={selectedAll}
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

  // can make resuable with selectedOptoins with optional type params
  const allOption = (
    <article>
      <span onClick={() => setSelectedAll(false)}>All Categories ❌</span>
    </article>
  )

  useOnClickOutside(ref, () => setShowCategories(false));

  let selectText;
  if (!selected.length && !selectedAll) {
    selectText = 'Select Category';
  } else if (selectedAll) {
    selectText = 'All Categories Selected';
  } else if (selected.length === 1) {
    selectText = '1 Category Selected';
  } else {
    selectText = `${selected.length} Catgories Selected`;
  }

  return (
    <>
      <div className="select-category-dropdown" onClick={() => setShowCategories(true)}>
        <span className="select-text">{selectText}</span>
        <img src="https://cdn1.iconfinder.com/data/icons/arrows-vol-1-4/24/dropdown_arrow-1024.png" alt="drop down arrow icon" />
      </div>
      {showCategories && 
      <div ref={ref} className="category-dropdown-display">
        {/* this could be the same small component you use for categoryOptions with optional params... */}
        <label className="category-option">
          <input 
            type="checkbox"
            name="all"
            checked={selectedAll}
            onChange={(event) => toggleSelected(event.target.name)}
          />
          <span className="all-categories-option">All Categories</span>
        </label>
        {categoryOptions}
      </div>}
      {selectedOptions}
      {selectedAll && allOption}
    </>
  )
}

export default MultiSelect