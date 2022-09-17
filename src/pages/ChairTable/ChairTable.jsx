import React from "react";
import { Tabs } from "antd";
import BookTicketsAndPay from "./BookTicketsAndPay";
import BookingHistory from "./BookingHistory";

export default function ChairTable(props) {
  return (
    <div className="px-5">
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="01 Kết quả & thanh toán" key="1">
          <BookTicketsAndPay {...props} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="02 Lịch Sử Đặt Vé" key="2">
          <BookingHistory {...props} />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}
