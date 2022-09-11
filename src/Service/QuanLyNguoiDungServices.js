import axios from "axios";
import { ACCESS_TOKEN, TOKEN, URL_API } from "../ultil/setting";

export class QuanLyNguoiDungServices {
    constructor() {

    }
    dangNhap = (thongTinDangNhap) => {
        return axios({
            method: "POST",
            url: `${URL_API}/api/QuanLyNguoiDung/DangNhap `,
            data: thongTinDangNhap,
            headers: {
                TokenCybersoft: TOKEN,
            }
        });
    };
    dangKy = (thongTinDangKy) => {
        return axios({
            method: "POST",
            url: `${URL_API}/api/QuanLyNguoiDung/DangKy `,
            data: thongTinDangKy,
            headers: {
                TokenCybersoft: TOKEN,
                'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
            }
        });
    };

}
export const quanLyNguoiDungServices = new QuanLyNguoiDungServices();