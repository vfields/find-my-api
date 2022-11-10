import { useState, useRef } from 'react';
import './TrialSearch.css';
import useOnClickOutside from '../../useOnClickOutside';

interface TrialSearchProps {
  categories: string[];
}

const TrialSearch = ({ categories }: TrialSearchProps) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [selectedAll, setSelectedAll] = useState<boolean>(false);

  const categoryOptions = categories.map((category, index) => {
    return (
      <label key={index} className="categories-option">
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

  const toggleSelected = (name: string) => {
    if (name === "all") {
      setSelected([]);
      setSelectedAll(!selectedAll);
      manageInputs();
    }
    else if (selected.includes(name)) {
      const newSelections = selected.filter(selection => selection !== name);
      setSelected(newSelections);
    } 
    else {
      setSelected([...selected, name]);
    }
  }

  const manageInputs = () => {
    const inputs = Array.from(
      document.querySelectorAll('.category')
    );
    inputs.forEach(input => {
      input.toggleAttribute('disabled');
    });
  }

  const [showCategories, setShowCategories] = useState(false);

  const ref = useRef(null); 
  // ref is weird, seemingly have to assign it to null to get TS out of the way

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

  // rename these params etc. and make clearer!
  const removeSelected = (name: string) => {
    const filteredSelected = selected.filter(option => option !== name);
    setSelected(filteredSelected)
  }

  const selectedOptions = selected.map((selection, index) => {
    // make this its own component!
    return (
      <article key={index}>
        <span onClick={() => removeSelected(selection)}>{selection} ❌</span>
        {/* icon img of an x, delete from selected */}
      </article>
    )
  })

  const allOption = (
    <article>
      <span onClick={() => setSelectedAll(false)}>All Categories ❌</span>
    </article>
  )

  return (
    <>
      <div className="select-category" onClick={() => setShowCategories(true)}>
        <span>{selectText}</span>
        <img src="https://cdn1.iconfinder.com/data/icons/arrows-vol-1-4/24/dropdown_arrow-1024.png" alt="drop down arrow icon" />
      </div>
      {showCategories && 
      <div ref={ref} className="test-category-display">
        <label className="all-categories-option categories-option">
          <input 
            type="checkbox"
            name="all"
            checked={selectedAll}
            onChange={(event) => toggleSelected(event.target.name)}
          />
          All Categories
        </label>
        {categoryOptions}
      </div>}
      {selectedOptions}
      {selectedAll && allOption}
    </>
  )
}

export default TrialSearch