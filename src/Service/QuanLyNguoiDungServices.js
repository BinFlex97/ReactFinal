import axios from "axios";
import { ACCESS_TOKEN, DOMAIN, TOKEN, } from "../ultil/setting";
import { Service } from "./Service";

export class QuanLyNguoiDungServices extends Service {
    constructor() {
        super();
    }
    dangNhap = (thongTinDangNhap) => {
        return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
    };
    dangKy = (thongTinDangKy) => {
        return this.post(`/api/QuanLyNguoiDung/DangKy`, thongTinDangKy);
    };

}
export const quanLyNguoiDungServices = new QuanLyNguoiDungServices();