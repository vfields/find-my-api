import { useState, useEffect, useRef } from 'react';
import './TrialSearch.css';
import MultiSelect from '../MultiSelect/MultiSelect';

/* const refContainer = useRef(initialValue); 

useRef returns a mutable ref object whose .current property is 
initialized to the passed argument (initialValue). The returned object will 
persist for the full lifetime of the component.

Essentially, useRef is like a “box” that can hold a mutable value in its .current property.

*/

function useOnClickOutside(ref: any, handler: any) {
  useEffect(
    () => {
      const listener = (event: any) => {
        // Do nothing if clicking ref's element or its children
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      // when the component unmounts, clean up 
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // only listen to ref and handler for this effect
    [ref, handler]
  );
}


const TrialSearch = () => {

  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [selectedAll, setSelectedAll] = useState(false);

  useEffect(() => {
    fetch('https://api.publicapis.org/categories')
      .then(response => response.json())
      .then(data => setCategories(data.categories))
  }, [])

  // can I borrow from the multiselect solution and use toggleSelected as the 
  // onChange function in my inputs... and then assign checked atr to state?
  // trial vv

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
      setSelected([...selected, name])
    }
  }

  const manageInputs = () => {
    const inputs = Array.from(
      document.querySelectorAll('.not-all')
    );
    inputs.forEach(input => {
      input.toggleAttribute('disabled');
    })
  }

  // trial ^^ 

  const categoryOptions = categories.map((category, index) => {
    return (
      <label key={index} className="categories-option">
        <input 
          className="not-all"
          type="checkbox"
          name={category}
          checked={selected.includes(category)}
          onChange={(event) => toggleSelected(event.target.name)}
        />
        {category}
      </label>
    )
  })

  const [isShown, setIsShown] = useState(false);

  const ref = useRef(null); 
  // ref is weird, seemingly have to assign it to null to get TS out of the way

  useOnClickOutside(ref, () => setIsShown(false));


  return (
    <>
      <div className="select-category-btn" onClick={() => setIsShown(true)}>
        <span>Select Category</span>
        <img src="https://cdn1.iconfinder.com/data/icons/arrows-vol-1-4/24/dropdown_arrow-1024.png" />
      </div>
      {isShown && 
      <div ref={ref} className="test-category-display">
        <label className="all-categories-option categories-option">
          <input type="checkbox" name="all" checked={selectedAll} onChange={(event) => toggleSelected(event.target.name)}></input>
          All Categories
        </label>
        {categoryOptions}
      </div>}
    </>
  )
}

export default TrialSearch

// some logic for MultiSelect

// const TrialSearch = () => {
//   const [selected, setSelected] = useState<string[]>([])

//   const data = [
//     {
//       id: 1, title: 'category 1'
//     },
//     {
//       id: 2, title: 'category 2'
//     }
//   ]

//   const toggleSelected = (name: string) => {
//     if (selected.includes(name)) {
//       const newSelections = selected.filter(selection => selection !== name);
//       setSelected(newSelections);
//     } else {
//       setSelected([...selected, name])
//     }
//   }

//   return (
//     <section>
//       <p>I am TrialSearch</p>
//       <MultiSelect
//         data={data}
//         selected={selected}
//         toggleSelected={toggleSelected}
//       />
//     </section>
//   );
// }

// export default TrialSearch;