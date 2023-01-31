// import axios from "axios";


// const fetchImg = async fetchImg => {
//   const response = axios.get(`${API}?q=${keyWord}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`);
//   console.log((await response).data.hits);
//   return (await response.data.hits);
// }


export default async function fetchImg(keyWord, page) {
  const API = 'https://pixabay.com/api/';
  const KEY = '31929702-f7252bd69ed2023a516a522a7';

  return await fetch(`${API}?q=${keyWord}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => response.json());
}