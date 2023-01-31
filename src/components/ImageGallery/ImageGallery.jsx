import PropTypes from "prop-types";

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from '../ImageGallery/ImageGallery.module.css';

const ImageGallery = ({imgArray, onClick}) => {
  return <ul className={css.gallery}>
    {imgArray.map(img => <ImageGalleryItem key={img.id} src={img.webformatURL} tags={img.tags} onClick={onClick} /> )}
</ul>
}

export default ImageGallery;

ImageGallery.propTypes = {
  imgArray: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),).isRequired,
  onClick: PropTypes.func.isRequired,
}