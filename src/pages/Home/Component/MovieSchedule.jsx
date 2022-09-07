import { Button, Card, Col, Collapse, Divider, List, Menu, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { homeService } from '../../../Service/HomeService'
import moment from "moment"
const { Panel } = Collapse;

export default function MovieSchedule() {
    let [data, setData] = useState([])
    let [groupList, setGroupList] = useState({
        list: [],
        logo: "",
    })
    let [movieList, setMovieList] = useState({
        list: [],
        info: {
            name: "",
            address: ""
        }
    })


    let GetData = () => {
        homeService.GetMoviesSchedule().then((result) => {
            setData(result.data.content);
        }).catch((error) => {
            console.log(error)
        })
    }
    let GetGroupItems = (event) => {
        data.map((system) => {
            if (system.maHeThongRap === event.key)
                setGroupList(groupList = { list: system.lstCumRap, logo: system.logo })
        })
    }
    let GetMovieItems = (event) => {
        groupList.list.map((group) => {
            if (group.maCumRap === event.key)
                setMovieList(movieList = {
                    list: group.danhSachPhim,
                    info: {
                        name: group.tenCumRap,
                        address: group.diaChi
                    }
                })
        })
    }

    let RenderSystem = () => {
        let items = data.map((system) => {
            return {
                key: system.maHeThongRap,
                icon: <img alt='' style={{ width: "30px", height: "30px" }} src={system.logo} />,
                label: system.tenHeThongRap
            }
        })
        return <Collapse defaultActiveKey={["system"]} accordion={true}>
            <Panel header={<h5>Hệ Thống Rạp</h5>} key="system">
                <div>
                    <Menu onClick={GetGroupItems} items={items} theme="light" mode="inline" defaultSelectedKeys={['1']} />
                </div>
            </Panel>
        </Collapse>
    }
    let RenderGroup = () => {
        let items = groupList.list.map((group) => {
            return {
                key: group.maCumRap,
                icon: <img alt='' style={{ width: "30px", height: "30px" }} src={groupList.logo} />,
                label: group.tenCumRap
            }
        })
        return <Collapse defaultActiveKey={"group"}>
            <Panel header={<h5>Cụm Rạp</h5>} key={"group"}>
                <Menu onClick={GetMovieItems} items={items} theme="light" mode="inline" />
            </Panel>
        </Collapse>
    }
    let RenderMovieSchedule = () => {
        let items = movieList.list.map((movie) => {
            return {
                key: movie.maPhim,
                icon: <img alt='' style={{ width: "100px", height: "100px" }} src={movie.hinhAnh} />,
                label: movie.tenPhim,
                schedule: movie.lstLichChieuTheoPhim.map((schedule) => {
                    let time = moment(schedule.ngayChieuGioChieu).format("HH:MM")
                    return <Button onClick={() => { console.log("Mã lịch chiếu : " + schedule.maLichChieu) }} icon={""} size="middle">{time}</Button>
                })
            }
        })

        return <div>
            <Card title={`Rạp: ${movieList.info.name}`}>
                Địa chỉ: {movieList.info.address}
            </Card>
            <Divider>Danh Sách Phim</Divider>
            <List
                itemLayout="horizontal"
                dataSource={items}
                renderItem={item => (
                    <div>
                        <List.Item
                            key={item.key}
                        >
                            <List.Item.Meta
                                avatar={item.icon}
                                title={item.label}
                                description={item.schedule}
                            />
                        </List.Item>
                    </div>

                )}
            />
        </div>
    }
    useEffect(() => {
        GetData();
    }, [])
    return (
        <div>
            <h3>Lịch Chiếu Phim</h3>
            <Row style={{ width: "100%" }} gutter={{ xs: 8, sm: 16, md: 24, lg: 32, }} >
                <Col className="gutter-row" span={6}>
                    {RenderSystem()}
                </Col>
                <Col className="gutter-row" span={6}>
                    {RenderGroup()}
                </Col>
                <Col className="gutter-row" span={12}>
                    {RenderMovieSchedule()}
                </Col>
            </Row>
        </div>


    )
}
