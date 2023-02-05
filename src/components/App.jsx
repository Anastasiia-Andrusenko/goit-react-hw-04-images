
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
      // Не розумію, як мені зробити так, щоб коли пошук новий, то щоб ImgArray очищався? 
      // раніше я порівнювала старе і нове значення keyWord і в залежності змінилося воно чи ні, то очищала галерею.
      // А якщо змінювався пейдж, то я навпаки розпилювала старий масив + новий response. 
      // А тепер не розумію як це перевірити
      setImgArray(prevImgArray => [...prevImgArray, ...response.hits])
    }).finally(() => setIsLoading(false));
    // Ще питання, чи потрібно відловлювати помилку фетча? якщо так, то де, як? 
  }, [keyWord, page]); 


  const handleFormSubmit = value => {
    // console.log(value);
    setKeyWord(value);
    scroll.scrollToTop();
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