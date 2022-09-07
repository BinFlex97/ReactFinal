import axios from "axios";
import { DOMAIN, TOKEN } from "../ultil/setting";

export class QuanLyHeThongRapServices {
    constructor() {

    }
    layThongTinLichChieu = (id) => {
        return axios({
            method: "GET",
            url: `${DOMAIN}/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
            headers: {
                "TokenCybersoft": TOKEN
            }
        });
    };

}
export const quanLyHeThongRapSerVices = new QuanLyHeThongRapServices();