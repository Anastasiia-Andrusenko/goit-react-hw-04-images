import { ColorRing } from 'react-loader-spinner';
import css from '../Loader/Loader.module.css';


const Loader = ({isVisible}) => {
  return <div className={css.loader}>
    <ColorRing
      visible={isVisible}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#ff0080', '#8000c0', '#4300c0', '#003ac0', '#016e5e']}
    />
  </div>
}

export default Loader;