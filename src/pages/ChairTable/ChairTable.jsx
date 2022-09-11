import React from "react";
import styleChairCss from "./ChairTableCss.module.css";

export default function ChairTable() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-8">
          <div className={`text-center ${styleChairCss.screen}`}>
            <h4>Màn Hình</h4>
          </div>
        </div>
        <div className="col-4">
          <p style={{ fontSize: "30px" }} className="text-center text-success">
            Giá: 0đ
          </p>
          <hr />
          <h2>Tên Phim</h2>
          <p>Địa Chỉ: tên Cụm Rạp</p>
          <p>Ngày chiếu - giờ chiếu</p>
          <hr />
          <div style={{ alignItems: "center" }} className="row">
            <div className="col-8">
              <h2 className="text-danger">Ghế</h2>
            </div>
            <div className="col-4">Giá Vé: 0đ</div>
          </div>
          <hr />
          <h5>UserLogin:email</h5>
          <hr />
          <h5>UserLogin:tài khoản</h5>
        </div>
      </div>
    </div>
  );
}
