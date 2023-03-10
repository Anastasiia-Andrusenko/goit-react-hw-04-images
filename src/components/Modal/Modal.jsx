
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { SlClose } from "react-icons/sl";
import PropTypes from 'prop-types';
import css from '../Modal/Modal.module.css';



const modalRoot = document.querySelector('#modal-root')
const htmlRef = document.getElementById('html');


const Modal = ({ url, onClose, alt }) => {
  
  useEffect(() => {
    window.addEventListener('keydown', handleClose);
    // console.log(htmlRef);
    htmlRef.style.overflow = "hidden";
    return () => {
      htmlRef.style.overflow = "unset";
      window.removeEventListener('keydown', handleClose);}
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