import { useState, useEffect, useRef } from 'react';
import './TrialSearch.css';
import useOnClickOutside from '../../useOnClickOutside';

interface TrialSearchProps {
  categories: string[];
}

const TrialSearch = ({ categories }: TrialSearchProps) => {

  const [selected, setSelected] = useState<string[]>([]);
  const [selectedAll, setSelectedAll] = useState<boolean>(false);

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

  const disableInputs = () => {
    const inputs = Array.from(
      document.querySelectorAll('.category')
    );
    console.log('these are the disabled inputs', inputs)
    inputs.forEach(input => {
      input.setAttribute('disabled', '');
    });
  }

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

  const [showCategories, setShowCategories] = useState(false);

  const ref = useRef(null); 
  // ref is weird, seemingly have to assign it to null to get TS out of the way

  useOnClickOutside(ref, () => setShowCategories(false));

  return (
    <>
      <div className="select-category-btn" onClick={() => setShowCategories(true)}>
        <span>Select Category</span>
        <img src="https://cdn1.iconfinder.com/data/icons/arrows-vol-1-4/24/dropdown_arrow-1024.png" />
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
    </>
  )
}

export default TrialSearch