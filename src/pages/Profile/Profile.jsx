import { Col, Divider, Row, Space } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'

const renderInfo = () => {

}
export default function Profile() {
  let {userLogin} = useSelector(state => state.QuanLyNguoiDungReducer)
  return (
    <div>
      <h1>Thông tin người dùng :</h1>

      <Row gutter={[16, 24]}> 
        <Col span={12}>
          <Divider orientation="middle">Thông Tin Cá Nhân</Divider>
          <Row className='pt-5' style={{paddingLeft:100}} gutter={[0,30]}>
              <Col span={12}><h5>Tài Khoản :</h5></Col>
              <Col span={12}>{userLogin.taiKhoan}</Col>
              <Col span={12}><h5>Họ Tên :</h5></Col>
              <Col span={12}>{userLogin.hoTen}</Col>
              <Col span={12}><h5>Email :</h5></Col>
              <Col span={12}>{userLogin.email}</Col>
              <Col span={12}><h5>Số điện thoại :</h5></Col>
              <Col span={12}>{userLogin.soDT}</Col>
              <Col span={12}><h5>Mã loại người dùng :</h5></Col>
              <Col span={12}>{userLogin.maLoaiNguoiDung}</Col>
              <Col span={12}><h5>Mã nhóm :</h5></Col>
              <Col span={12}>{userLogin.maNhom}</Col>
          </Row>
        </Col>
        <Col span={12}>
          <Divider orientation="middle">Lịch Sử đặt ghế</Divider>
        </Col>
      </Row>
    </div>
  )
}
