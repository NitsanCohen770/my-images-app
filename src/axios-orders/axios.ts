import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';

const cache = setupCache({
  maxAge: 15 * 60 * 1000,
});

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '22784686-afc9f5a559a2d1e6481491013',
    safesearch: 'true',
    per_page: 30,
    min_width: 150,
    min_height: 99,
    page: 2,
  },
  adapter: cache.adapter,
});

export default instance;
