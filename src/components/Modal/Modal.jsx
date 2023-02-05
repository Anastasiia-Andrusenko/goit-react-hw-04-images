
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { SlClose } from "react-icons/sl";
import PropTypes from 'prop-types';
import css from '../Modal/Modal.module.css';



const modalRoot = document.querySelector('#modal-root')

const Modal = ({ url, onClose, alt }) => {
  
  useEffect(() => {
    window.addEventListener('keydown', handleClose);
    //  Тут не спрацьовує document.style.overflow, чи я не там пишу ?
    //  Точніше видає помилку
    //  Cannot set properties of undefined (setting 'overflow')
    //  коли окремо в консолі пишу, то все працює. 
    // 
    // document.style.overflow = "hidden";
  })
  
  const handleClose = evt => {
    if (evt.code === 'Escape' || evt.target === evt.currentTarget) {
      onClose();
    }
  };

  
  return createPortal(
    <div className={css.overlay} onClick={handleClose}>
      <div className={css.modal}>
        <img src={url} alt={alt} className={css.img} />
      </div>
      <SlClose className={css.icon} onClick={onClose} />
    </div>, modalRoot);
}

export default Modal;

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  alt: PropTypes.string,
}