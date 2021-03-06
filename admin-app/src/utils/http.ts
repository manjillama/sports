import axios from 'axios';

import * as dotenv from 'dotenv';

dotenv.config();

const baseURI = process.env.VUE_APP_API_BASE_URL;

const http = axios.create({
  baseURL: baseURI,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default http;
