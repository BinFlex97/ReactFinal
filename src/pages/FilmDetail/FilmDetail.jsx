import React, { Fragment } from "react";
import styleDetail from "./FilmDetail.module.css";
import { Rate } from "antd";
import { Progress } from "antd";
import HeThongCumRap from "../../Component/HeThongCumRap/HeThongCumRap";
import { useSelector } from "react-redux";
export default function FilmDetail(props) {
  let { data } = useSelector(
    (rootReducer) => rootReducer.QuanLyHTCRFilmReducer
  );
  let { heThongRapChieu } = data;
  return (
    <Fragment>
      <div
        style={{
          backgroundImage: `url(${data.hinhAnh})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
          height: "600px",
        }}
      >
        <div className={styleDetail.overlay}>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="mt-5 d-flex align-items-center justify-content-center">
                  <img width={250} height={300} src={data.hinhAnh} alt="" />
                  <div className="text-light ml-5">
                    <h2 className="text-light">{data.tenPhim}</h2>
                    <p>{data.ngayKhoiChieu}</p>
                    <button className="btn btn-danger">Mua Vé</button>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
                className="col-6 mt-5"
              >
                <div>
                  <Progress
                    type="circle"
                    percent={100}
                    format={() => {
                      return (
                        <span
                          style={{
                            fontSize: "60px",
                            color: "white",
                            fontWeight: "bold",
                          }}
                        >
                          {data.danhGia}
                        </span>
                      );
                    }}
                  />
                </div>
                <Rate allowHalf defaultValue={5} />
                <p className="text-light mt-3">Số người đánh giá: 15</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5">
        <HeThongCumRap heThongRapChieu={heThongRapChieu} />
      </div>
    </Fragment>
  );
}
