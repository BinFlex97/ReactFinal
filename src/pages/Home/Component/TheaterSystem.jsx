import { Card, Col, Menu, Radio, Row, Space } from 'antd'
import React from 'react'
import { useState } from 'react'
import { GetListAPI } from '../../../Service/Service';
import { THEATER_SYSTEM_LINK } from '../../../ultil/setting';


export default function TheaterSystem() {
    let [theaterSystem, setTheaterSystem] = useState([]);
    GetListAPI(THEATER_SYSTEM_LINK, setTheaterSystem)

    let theaterSystemItem = [];

    theaterSystem.map((theater) => {
        let item = {
            key: theater.maHeThongRap,
            icon: <img alt='' style={{ width: "30px", height: "30px" }} src={theater.logo} />,
            label: theater.tenHeThongRap,
        }
        theaterSystemItem.push(item)
    })
    return (
        <div>
            <h4>Mua vé theo rạp</h4>
            <Row gutter={{ xs: 8, sm: 16, md: 24,xl: 30}}>
                <Col span={6} order={1}>
                    <h5>Hệ Thống Rạp</h5>
                    <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} items={theaterSystemItem}/>
                </Col>
                <Col span={6} order={2}>
                    <h5>Cụm Rạp</h5>
                    <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: "",
                                label: 'nav 1',
                            },
                            {
                                key: '2',
                                icon: "",
                                label: 'nav 2',
                            },
                            {
                                key: '3',
                                icon: "",
                                label: 'nav 3',
                            },
                        ]}
                    />
                </Col>
                <Col span={12} order={3}>
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
                </Col>
            </Row>
        </div >

    )
}
