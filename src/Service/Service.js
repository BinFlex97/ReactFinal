import axios from 'axios'
import { DOMAIN, TOKEN } from '../ultil/setting'

export class Service {
  get = (url) => {
    return axios({
      method: 'get',
      url: `${DOMAIN}${url}`,
      headers: {
        "TokenCybersoft": TOKEN
      }
    })
  }
}