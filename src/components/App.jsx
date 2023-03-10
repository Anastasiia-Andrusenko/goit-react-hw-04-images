
import { useState, useEffect } from "react";

import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";
import Notification from "./Notification/Notification";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";
import fetchImg from "../api/fetch";


var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;

const App = () => {
  const [imgArray, setImgArray] = useState([]);
  const [largeImage, setLargeImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [keyWord, setKeyWord] = useState('');
  const [page, setPage] = useState(1);


  useEffect(() => {
    if (!keyWord) {
      return;
    };

    setIsLoading(true);
    fetchImg(keyWord, page).then(response => {
      if (!response.hits.length === 0) {
        window.alert('No matches. Enter a valid value');
        return;
      };
      
      setImgArray(prevImgArray => [...prevImgArray, ...response.hits])
    }).catch((err) => console.log(err.message))
      .finally(() => setIsLoading(false));
  }, [keyWord, page]); 


  const handleFormSubmit = value => {
    if (value !== keyWord) {
      setPage(1);
      setKeyWord(value);
      setImgArray('')
      scroll.scrollToTop();
    }
  };
  
  const onImgClick = imgURL => {setLargeImage(imgURL)};  

  const loadMoreBtn = () => {setPage(prevPage => (prevPage + 1))};
  
  const onClose = () => { setLargeImage('') };

  return <>
    <Searchbar onSubmit={handleFormSubmit} />
    {isLoading &&  <Loader/>}
    {imgArray.length > 0 ? <ImageGallery imgArray={imgArray} onClick={onImgClick}/> : <Notification message='enter a keyword to start searching'/>} 
    {largeImage.length > 0 && <Modal url={largeImage} onClose={onClose} alt={keyWord}></Modal>}
    {imgArray.length > 0 && <Button loadMoreBtn={loadMoreBtn}>Load more</Button>}
  </>
}

export default App;