import { Service } from "./Service";

export class HomeService extends Service{
    GetBannerList = () => {
        return this.get("/api/QuanLyPhim/LayDanhSachBanner")
    }
    GetMovieList = () => {
        return this.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP05")
    }
    
    GetMoviesSchedule = () => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap`)
    }
}

export const homeService= new HomeService();