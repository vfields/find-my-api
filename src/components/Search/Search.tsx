import { SearchProps } from '../../model';
import './Search.css';
import MultiSelect from '../MultiSelect/MultiSelect';

const Search = ({ categoryError, categories, selected, keyword, auth, https, cors, setSelected, setKeyword, setAuth, setHttps, setCors }: SearchProps) => {
  const clearForm = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setSelected([]);
    setKeyword('');
    setAuth('0');
    setHttps('0');
    setCors('0');
  }

  let disableBtn = true;
  if (keyword || selected.length || auth !== '0' || cors !=='0' || https !== '0' ) {
    disableBtn = false;
  }

  return (
    <form className='api-search-form'>
      <MultiSelect
        categoryError={categoryError}
        categories={categories}
        selected={selected}
        setSelected={setSelected}
      />
      <input
        className='keyword-input'
        type='text'
        name='keyword'
        value={keyword}
        placeholder='Search By Keyword!'
        onChange={(event) => setKeyword(event.target.value)}
      />
      <div className='auth-radio-container'>
        <span className='auth-req-text'>Authentication:</span>
        <label className='auth-radio'>
          <input 
            type='radio'
            name='authentication'
            value='1'
            checked={auth === '1'}
            onChange={(event) => setAuth(event.target.value)}
          /> Yes
        </label>
        <label className='auth-radio'>
        <input 
          type='radio'
          name='authentication'
          value='2'
          checked={auth === '2'}
          onChange={(event) => setAuth(event.target.value)}
        /> No
        </label>
        <label className='auth-radio'>
          <input 
            type='radio'
            name='authentication'
            value='0'
            checked={auth === '0'}
            onChange={(event) => setAuth(event.target.value)}
          /> Either
        </label>
      </div>
      
      <div className='https-radio-container'>
        <span className='https-req-text'>HTTPS:</span>
        <label className='https-radio'>
          <input 
            type='radio'
            name='https'
            value='1'
            checked={https === '1'}
            onChange={(event) => setHttps(event.target.value)}
          /> Yes
        </label>
        <label className='https-radio'>
        <input 
          type='radio'
          name='https'
          value='2'
          checked={https === '2'}
          onChange={(event) => setHttps(event.target.value)}
        /> No
        </label>
        <label className='https-radio'>
          <input 
            type='radio'
            name='https'
            value='0'
            checked={https === '0'}
            onChange={(event) => setHttps(event.target.value)}
          /> Either
        </label>
      </div>
      
      <div className='cors-radio-container'>
        <span className='cors-req-text'>CORS:</span>
        <label className='cors-radio'>
          <input 
            type='radio'
            name='cors'
            value='1'
            checked={cors === '1'}
            onChange={(event) => setCors(event.target.value)}
          /> Yes
        </label>
        <label className='cors-radio'>
        <input 
          type='radio'
          name='cors'
          value='2'
          checked={cors === '2'}
          onChange={(event) => setCors(event.target.value)}
        /> No
        </label>
        <label className='cors-radio'>
          <input 
            type='radio'
            name='cors'
            value='0'
            checked={cors === '0'}
            onChange={(event) => setCors(event.target.value)}
          /> Either
        </label>
      </div>
      <button disabled={disableBtn} className='clear-search-btn' onClick={clearForm}>Clear My Search!</button>
    </form>
  );
}

export default Search;