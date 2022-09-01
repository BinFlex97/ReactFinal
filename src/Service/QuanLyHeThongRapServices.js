import axios from "axios";
import { TOKEN, URL_API } from "../ultil/setting";

export class QuanLyHeThongRapServices {
    constructor() {

    }
    layThongTinLichChieu = (id) => {
        return axios({
            method: "GET",
            url: `${URL_API}/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
            headers: {
                "TokenCybersoft": TOKEN
            }
        });
    };

}
export const quanLyHeThongRapSerVices = new QuanLyHeThongRapServices();