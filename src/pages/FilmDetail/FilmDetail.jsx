import React, { Fragment } from "react";
import styleDetail from "./FilmDetail.module.css";
import { Rate } from "antd";
import { Progress } from "antd";
export default function FilmDetail() {
  return (
    <div className={styleDetail.bg}>
      <div className={styleDetail.overlay}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="mt-5 d-flex align-items-center justify-content-center">
                <img src="https://picsum.photos/200/300" alt="" />
                <div className="text-light ml-5">
                  <h2 className="text-light">Tên Phim</h2>
                  <p>Thời gian chiếu</p>
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
                        10
                      </span>
                    );
                  }}
                />
              </div>
              <Rate allowHalf defaultValue={5} />
              <p className="text-light mt-3">Số người đánh giá: 10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
