import axios from 'axios';
import {baseUrl} from '../Utilities/Constants';

const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export default instance;
