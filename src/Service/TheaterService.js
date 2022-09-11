import { Service } from "./Service";

export class TheaterService extends Service{
    GetMoviesSchedule = () => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap`)
    }
}

export const theaterService = new TheaterService();