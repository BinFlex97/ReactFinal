import { Card, Col, Menu, Radio, Row, Space } from 'antd'
import React from 'react'
import { useState } from 'react'
import { homeService } from '../../../Service/HomeService';




export default function TheaterSystem() {
    let [theaterSystem, setTheaterSystem] = useState([]);
    let [theaterGroup, setTheaterGroup] = useState([{maCumRap:"default",tenCumRap:"Hãy chọn hệ thống rạp"}])
    const SystemRender = () => {
        let SystemHandle = (event) => {
            homeService.GetTheaterGroupList(event.key).then((result) => {
                setTheaterGroup(result.data.content)
            }).catch((error) => {
                console.log(error)
            })
        }
        let SystemItem = () => {
            homeService.GetTheaterSystemList().then((result) => {
                setTheaterSystem(result.data.content)
            }).catch((error) => {
                console.log(error)
            })
            return theaterSystem.map((theater) => {
                return {
                    key: theater.maHeThongRap,
                    icon: <img alt='' style={{ width: "30px", height: "30px" }} src={theater.logo} />,
                    label: theater.tenHeThongRap,
                }
            })
        }
        return <div>
            <h5>Hệ Thống Rạp</h5>
            <Menu onClick={SystemHandle} items={SystemItem()} theme="light" mode="inline" defaultSelectedKeys={['1']} />
        </div>

    }

    let GroupRender = () => {
        let GroupHandle = (event) => {
            console.log(event.key)
        }
        let GroupItem = () => {
            return theaterGroup.map((group) => {
                return {
                    key: group.maCumRap,
                    label: group.tenCumRap
                }
            })
        }
        return <div>
            <h5>Cụm Rạp</h5>
            <Menu onClick={GroupHandle} items={GroupItem()} theme="light" mode="inline" defaultSelectedKeys={['1']} />
        </div>
    }
    let MovieScheduleRender = () => {
        return <div>
            <h5>Danh sách phim theo rạp</h5>
            <Radio.Group>
                <Space size={'small'}>
                    <Radio.Button value="1">Date</Radio.Button>
                    <Radio.Button value="2">Date</Radio.Button>
                    <Radio.Button value="3">Date</Radio.Button>
                    <Radio.Button value="4">Date</Radio.Button>
                    <Radio.Button value="5">Date</Radio.Button>
                    <Radio.Button value="6">Date</Radio.Button>
                </Space>
            </Radio.Group>
            <Card title="Tên Rạp">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, cupiditate!
            </Card>
            <Card title="Danh Sách Phim">
                Card content
            </Card>
        </div>
    }
    return (
        <div>
            <h4>Mua vé theo rạp</h4>
            <Row gutter={{ xs: 8, sm: 16, md: 24, xl: 30 }}>
                <Col span={6} order={1}>
                    {SystemRender()}
                </Col>
                <Col span={6} order={2}>
                    {GroupRender()}
                </Col>
                <Col span={12} order={3}>
                    {MovieScheduleRender()}
                </Col>
            </Row>
        </div >

    )
}
