import PropTypes from "prop-types";
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({src, tags, onClick}) => {
  return <li className={css.item}>
    <img src={src} alt={tags} className={css.image} onClick={() => onClick(src)} />
</li>
}


export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}