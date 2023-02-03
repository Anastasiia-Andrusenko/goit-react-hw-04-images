import { useState } from 'react';
import PropTypes from 'prop-types';
import css from '../Searchbar/Searchbar.module.css';


const Searchbar = ({ onSubmit }) => {
  
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();

    if (searchValue.trim() === '') {
      return;
    }
    onSubmit(searchValue);
    setSearchValue('');
  }

  return <header className={css.search_bar}>
   <form className={css.form} onSubmit={handleSubmit}>
      <button type="submit" className={css.button}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24" height="24"
            viewBox="0 0 24 24"
            fill="none" stroke="#657789"
            strokeWidth="3" strokeLinecap="round"
            strokeLinejoin="round"
            className={css.svg}>
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        <span className={css.label}>Search</span>
      </button>
      <input
        className={css.input}
        type="search"
        autoComplete='off'
        autoFocus
        placeholder="Search images and photos"
        onChange={(evt) => {setSearchValue(evt.currentTarget.value.toLowerCase().trim())}}
      />
    </form>
  </header>
}

export default Searchbar;


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
