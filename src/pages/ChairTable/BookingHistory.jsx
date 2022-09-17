import React, { useState } from "react";
import { Divider, Radio, Table } from "antd";

export default function BookingHistory() {
  return (
    <div className="container">
      <div className="p-3">
        <h2 className="text-center">Lịch Sử Đặt Vé</h2>
        <div className="row">
          <div className="col-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
