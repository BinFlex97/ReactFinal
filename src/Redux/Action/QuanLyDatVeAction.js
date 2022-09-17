import { quanLyDatVeServices } from "../../Service/QuanLyDatVeServices";
import { ThongTinDatVe } from "../../_core/models/thongTinDatVe";
import { SET_DS_GHE_DETAIL } from "../Type/QuanLyDatVeType";


export const ChiTietDatGheAction = (maLichChieu) => {
    return async dispatch => {
        try {
            let result = await quanLyDatVeServices.layDanhSachPhongVe(maLichChieu);
            console.log(result);
            dispatch({
                type: SET_DS_GHE_DETAIL,
                thongTinPhongVe: result.data.content
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
    return async dispatch => {
        try {
            let result = await quanLyDatVeServices.datVe(thongTinDatVe);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };
};