import { ThongTinPhongVe } from "../../_core/models/thongTinPhongVe";
import { DAT_VE, SET_DS_GHE_DETAIL } from "../Type/QuanLyDatVeType";

const stateDefault = {
    thongTinPhongVe: new ThongTinPhongVe(),
    danhSachGheDangDat: []
};

export const QuanLyDatVeReducers = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_DS_GHE_DETAIL: {
            state.thongTinPhongVe = action.thongTinPhongVe;
            return { ...state };
        }
        case DAT_VE: {
            state.danhSachGheDangDat = [...state.danhSachGheDangDat];
            let index = state.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.maGhe === action.gheDangDat.maGhe);
            if (index > -1) {
                state.danhSachGheDangDat.splice(index, 1);
            } else {
                state.danhSachGheDangDat.push(action.gheDangDat);
            }
            return { ...state };
        }
        default: {
            return { ...state };

        }
    }
};
