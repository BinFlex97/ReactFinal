import { Card, Col, List, Menu, Radio, Row, Space } from 'antd'
import Sider from 'antd/lib/layout/Sider'
import React from 'react'

const dataList = [
    {
      title: 'Title 1',
    },
    {
      title: 'Title 2',
    },
    {
      title: 'Title 3',
    },
    {
      title: 'Title 4',
    },
    {
      title: 'Title 5',
    },
    {
      title: 'Title 6',
    },
  ];

export default function TheaterSystem() {
    return (
        <div>
            <h4>Mua vé theo rạp</h4>
            <Row>
                <Col span={6} order={1}>
                    <Menu
                        theme="light"
                        mode="inline"
                        defaultSelectedKeys={['1']}
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
                <Col span={6} order={2}>
                    <Menu
                        theme="light"
                        mode="inline"
                        defaultSelectedKeys={['1']}
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
                    <List
                        grid={{
                            gutter: 10,
                            column:1
                        }}
                        dataSource={dataList}
                        renderItem={item => (
                            <List.Item>
                                <Card title={item.title}>Card content</Card>
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
        </div >

    )
}
