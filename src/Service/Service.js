import axios from 'axios';
import { ACCESS_TOKEN, DOMAIN, TOKEN } from '../ultil/setting';

export class Service {
  get = (url) => {
    return axios({
      method: 'get',
      url: `${DOMAIN}${url}`,
      headers: {
        "TokenCybersoft": TOKEN
      }
    });
  };
  post = (url, data) => {
    return axios({
      method: "POST",
      url: `${DOMAIN}${url}`,
      data: data,
      headers: {
        TokenCybersoft: TOKEN,
        'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
      }
    });
  };
}