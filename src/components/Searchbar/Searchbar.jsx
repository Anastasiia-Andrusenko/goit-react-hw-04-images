import { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../Searchbar/Searchbar.module.css';


export default class Searchbar extends Component {
  state = {
    searchValue: '',
  }

  handleChange = evt => {
    this.setState({ searchValue: evt.currentTarget.value.toLowerCase().trim() });
  }

  handleSubmit = evt => {
    evt.preventDefault();

    if (this.state.searchValue.trim() === '') {
      return;
    }
    this.props.onSubmit(this.state.searchValue);
    this.setState({ searchValue: '' });
  }

  render() {
    return <header className={css.search_bar}>
  <form className={css.form} onSubmit={this.handleSubmit}>
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
      onChange={this.handleChange}
    />
  </form>
</header>
  }
}


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
