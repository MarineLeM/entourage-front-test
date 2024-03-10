import axios, { AxiosInstance } from 'axios';

const BASE_URL = process.env.REACT_APP_TDMB_API_URL;

export const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
     Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`,
  },
})
