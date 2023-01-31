import PropTypes from 'prop-types';
import css from '../Notification/Notification.module.css';


const Notification = ({message}) => {
  return <div className={css.container}>
    <p className={css.message}>{message}</p>
  </div>
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}