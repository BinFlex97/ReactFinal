import { Service } from "./Service";

export class HomeService extends Service{
    GetBannerList = () => {
        return this.get("/api/QuanLyPhim/LayDanhSachBanner")
    }
    GetMovieList = () => {
        return this.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP05")
    }
    GetTheaterSystemList = () => {
        return this.get(`/api/QuanLyRap/LayThongTinHeThongRap`)
    }
    GetTheaterGroupList = (url) => {
        return this.get(`/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${url}`)
    }
}

export const homeService= new HomeService();