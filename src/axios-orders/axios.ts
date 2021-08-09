import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '22784686-afc9f5a559a2d1e6481491013',
    safesearch: 'true',
    per_page: 30,
    min_width: 150,
    min_height: 99,
  },
});

export default instance;
