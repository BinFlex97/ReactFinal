import React from 'react'
import axios from 'axios'
import { TOKEN, URL_API } from '../ultil/setting';



export function GetListAPI(API,setArray) {
    axios({
        method: "get",
        url: `${URL_API}${API}`,
        headers: {
          "TokenCybersoft": TOKEN,
        }
      }).then((result) => {
        setArray(result.data.content)
      }).catch((e) => {
        console.log(e.message)
      })
}
