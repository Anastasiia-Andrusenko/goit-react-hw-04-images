import PropTypes from "prop-types";
import css from '../Button/Button.module.css';

const Button = ({loadMoreBtn}) => {
  return <button type='button' className={css.button} onClick={loadMoreBtn}>
  </button>
}

export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loadMoreBtn: PropTypes.func.isRequired,
}