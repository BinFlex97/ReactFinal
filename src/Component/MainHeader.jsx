import React from 'react'
import { Layout, Menu } from 'antd';
import {
  PhoneOutlined,
  PlayCircleTwoTone,
  InfoOutlined,
  HomeOutlined
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
const { Header } = Layout;
export default function MainHeader() {
  const menuItem = [
    {
      label: 'Cyber Cinema',
      key: 'Cyber Cinema',
      icon: <PlayCircleTwoTone style={{ fontSize: "40px" }} />,
    },
    {
      label: (<NavLink to="/home">Home</NavLink>),
      key: 'Home',
      icon: <HomeOutlined style={{ fontSize: "20px" }} />
    },
    {
      label: (<NavLink to="/filmdetail">Film Detail</NavLink>),
      key: 'Film Detail',
      icon: <PhoneOutlined style={{ fontSize: "20px" }} />
    },
    {
      label: (<NavLink to="/chairtable">Chair Table</NavLink>),
      key: 'Chair Table',
      icon: <InfoOutlined style={{ fontSize: "20px" }} />
    },
    {
      label: 'Submenu',
      key: 'Submenu',
      icon: <InfoOutlined style={{ fontSize: "20px" }} />,
      children: [
        {
          label: 'Submenu1',
          key: 'Submenu1',
        },
        {
          label: 'Submenu2',
          key: 'Submenu2',
        }
      ]
    }

  ]
  return (
    <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['Home']}
            items={menuItem}
          />
      </Header>
  )
}