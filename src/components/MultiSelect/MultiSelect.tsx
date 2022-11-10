import './MultiSelect.css';

interface MultiSelectProps {
  data: { id: number, title: string }[];
  selected: any[];
  toggleSelected: (name: string) => void;
}

const MultiSelect = ({ data, selected, toggleSelected }: MultiSelectProps) => {

  return (
    <div className="multi-select-dropdown">
            <div className="dropdown-selected">
                <div>{selected.length} Selected</div>
                <img src="https://cdn1.iconfinder.com/data/icons/arrows-vol-1-4/24/dropdown_arrow-1024.png" />
            </div>
            <ul className="dropdown-options">
              {data.map(option => {
                const isSelected = selected.includes(option.title);

                return (
                  <li key={option.id} className="dropdown-option" onClick={() => toggleSelected(option.title)}>
                    <input type="checkbox" checked={isSelected} className="dropdown-option-checkbox"></input>
                    <span>{option.title}</span>
                  </li>
                )
              })}
            </ul>
        </div>
  );
}

export default MultiSelect;