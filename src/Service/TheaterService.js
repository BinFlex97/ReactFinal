import { Service } from "./Service";

export class TheaterService extends Service{
    GetMoviesSchedule = () => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap`)
    }
    GetTheaterSystem = () => {
        return this.get("/api/QuanLyRap/LayThongTinHeThongRap")
    }
    GetTheaterGroup = (id) => {
        return this.get(`/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`)
    }
}

export const theaterService = new TheaterService();