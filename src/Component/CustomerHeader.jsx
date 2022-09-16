import React from "react";
import {
  GitlabOutlined,
  LogoutOutlined
} from "@ant-design/icons";
import { Avatar, Button } from "antd"
import { NavLink } from "react-router-dom";
import { USER_LOGIN } from "../ultil/setting";
import { history } from "../App"
import swal from "sweetalert";
export default function CustomerHeader() {
  const renderUser = () => {
    if (localStorage.getItem(USER_LOGIN)) {
      let user = JSON.parse(localStorage.getItem(USER_LOGIN))
      return <div onClick={() => {
        history.push("/profile")
      }} style={{cursor:"pointer"}} className="navbar-nav nav-link text-white">
        <Avatar size="large" icon={<img src="https://picsum.photos/200/300" alt="" />} />
        <span className="pl-2 pr-4">
          {user.hoTen} <br />
          {user.maLoaiNguoiDung}
        </span>
        <Button onClick={() => {
          localStorage.clear()
          history.push("/home")
        }} type="danger" shape="circle" icon={<LogoutOutlined />} />
      </div>
    } else {
      return <div>
        <NavLink to={"/register"}>
          <span className="nav-item">Đăng Ký</span>
        </NavLink>
        <span> / </span>
        <NavLink to={"/login"}>
          <span className="nav-item">Đăng Nhập</span>
        </NavLink>
      </div>
    }
  }
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid px-5">
          <NavLink to={"/home"}>
            <span className="navbar-brand">
              <GitlabOutlined className="logo" style={{ fontSize: "40px" }} />
              Cyber Cinema
            </span>
          </NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to={"/home"}>Home</NavLink>
              </li>
              <li className="nav-item">
                <span style={{cursor:"pointer"}} onClick={async () => {
                  let user = JSON.parse(localStorage.getItem(USER_LOGIN))
                  if (user && user.maLoaiNguoiDung === "QuanTri") {
                    history.push("/admin/film")
                  } else {
                    history.push("/login")
                  }
                }} className="nav-link">Admin</span>
              </li>
            </ul>
            {renderUser()}
          </div>
        </div>

      </nav>
    </div>
  );
}
