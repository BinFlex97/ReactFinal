import { Layout, Menu } from 'antd';
import React from 'react'
import { UploadOutlined, UserOutlined, VideoCameraOutlined, PlayCircleTwoTone } from '@ant-design/icons';
import { Route } from 'react-router-dom';


const { Header, Content, Footer, Sider } = Layout;

export default function AdminLayout(props) {
    return (
        <Route exact path={props.path}
            render={(propsRoute) => {
                return <Layout>
                    <Sider
                        breakpoint="lg"
                    >
                        <div className="logo p-3" style={{ border: "1px solid gray" }}>
                            <PlayCircleTwoTone className="logo" style={{ fontSize: "40px" }} />
                            <span style={{ color: "white", fontSize: "20px" }}>Cyber Cinema</span>
                        </div>
                        <Menu
                            theme="dark"
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
                                (icon, index) => ({
                                    key: String(index + 1),
                                    icon: React.createElement(icon),
                                    label: `nav ${index + 1}`,
                                }),
                            )}
                        />
                    </Sider>
                    <Layout>
                        <Header
                            className="site-layout-sub-header-background"
                            style={{
                                padding: 10,
                                marginLeft: 18
                            }}
                        ><h1>Trang Quản Lý Hệ Thống</h1></Header>
                        <Content
                            style={{
                                margin: '24px 16px 0',
                            }}
                        >
                            <div
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    minHeight: 360,
                                }}
                            >
                                <props.component {...propsRoute}/>
                            </div>
                        </Content>
                        <Footer
                            style={{
                                textAlign: 'center',
                            }}
                        >
                            Ant Design ©2018 Created by Ant UED
                        </Footer>
                    </Layout>
                </Layout>
            }}
        />

    )
}
