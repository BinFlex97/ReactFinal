import { GROUP_ID } from "../ultil/setting"
import { Service } from "./Service"

export class MovieService extends Service{
    GetBannerList = () => {
        return this.get("/api/QuanLyPhim/LayDanhSachBanner")
    }
    GetMovieList = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`)
    }
    GetMovieInfo = (id) => {
        return this.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
    }
    AddNewMovie = (data) => {
        return this.post(`/api/QuanLyPhim/ThemPhimUploadHinh`,data)
    }
    UpdateMovie = (formData) => {
        return this.put(``)
    }
}
export const movieService = new MovieService();