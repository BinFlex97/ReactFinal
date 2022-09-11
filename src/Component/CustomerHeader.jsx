import React from "react";
import { Affix, Layout, Menu } from "antd";
import {
  PhoneOutlined,
  PlayCircleTwoTone,
  InfoOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
const { Header } = Layout;
export default function CustomerHeader() {
  const menuItem = [
    {
      label: "Cyber Cinema",
      key: "Cyber Cinema",
      icon: <PlayCircleTwoTone className="logo" style={{ fontSize: "40px" }} />,
    },
    {
      label: <NavLink to="/admin">Admin</NavLink>,
      key: "Admin",
      icon: <HomeOutlined className="logo" style={{ fontSize: "20px" }} />,
    },
    {
      label: <NavLink to="/home">Home</NavLink>,
      key: "Home",
      icon: <HomeOutlined className="logo" style={{ fontSize: "20px" }} />,
    },
    {
      label: <NavLink to="/filmdetail/:id">Film Detail</NavLink>,
      key: "Film Detail",
      icon: <PhoneOutlined className="logo" style={{ fontSize: "20px" }} />,
    },
    {
      label: <NavLink to="/chairtable">Chair Table</NavLink>,
      key: "Chair Table",
      icon: <InfoOutlined className="logo" style={{ fontSize: "20px" }} />,
    },
    {
      label: "Submenu",
      key: "Submenu",
      icon: <InfoOutlined className="logo" style={{ fontSize: "20px" }} />,
      children: [
        {
          label: "Submenu1",
          key: "Submenu1",
        },
        {
          label: "Submenu2",
          key: "Submenu2",
        },
      ],
    },
  ];
  return (
    <Affix offsetTop={0}>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["Home"]}
          items={menuItem}
        />
      </Header>
    </Affix>
  );
}
