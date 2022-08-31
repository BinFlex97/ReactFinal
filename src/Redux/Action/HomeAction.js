import axios from 'axios'
import { TOKEN, URL_API } from '../../ultil/setting'
import { GET_BANNER } from '../Type/HomeType'

// export const GetBanner = async (dispatch2) => {
//   await axios({
//     method: "get",
//     url: `${URL_API}/api/QuanLyPhim/LayDanhSachBanner`,
//     headers: {
//       "TokenCybersoft": TOKEN,
//     }
//   }).then((result) => {
//     console.log(result.data.content)
//     let action = {
//       type: GET_BANNER,
//       bannerArr: result.data.content
//     }
//     dispatch2(action);
//   }).catch((e) => {
//     console.log(e.message)
//   })
// }
