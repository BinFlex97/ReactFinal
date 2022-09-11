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
  put = (url, model) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: 'PUT',
      data: model,
      headers: {
        "TokenCybersoft": TOKEN
      }
    })
  }
  post = (url, model) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: 'POST',
      data: model,
      headers: {
        "TokenCybersoft": TOKEN
      }
    })
  }
  delete = (url) => {
    return axios({
        url:`${DOMAIN}/${url}`,
        method:'DELETE',
        headers: {
          "TokenCybersoft": TOKEN
        }
    })
}
}