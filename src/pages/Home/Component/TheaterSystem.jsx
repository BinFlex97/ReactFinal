import { Card, Cascader, Col, Menu, Radio, Row, Space } from 'antd'
import Meta from 'antd/lib/card/Meta';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { homeService } from '../../../Service/HomeService';




export default function TheaterSystem() {

    // let [groupList, setDataList] = useState([])
    // let [systemItems, setSystemItems] = useState([]);
    // let [groupItems, setGroupItems] = useState([]);
    // let getSystemItems = () => {
        // homeService.GetTheaterSystem().then((result) => {
        //     let list = result.data.content
        //     let items = list.map((system,index) => {
        //         return {
        //             key: index,
        //             icon: <img alt='' style={{ width: "30px", height: "30px" }} src={system.logo} />,
        //             label: system.tenHeThongRap,
        //         }
        //     })
        //     setDataList(list)
        //     setSystemItems(items)
        // }).catch((error) => {
        //     console.log(error)
        // })
    // }
    // let getGroupItems = (event) => {
    //     let list = dataList[event.key].lstCumRap 
    //     let items = list.map((group,index) => {
    //         return {
    //             key: index,
    //             icon: <img alt='' style={{ width: "30px", height: "30px" }} src={dataList[event.key].logo} />,
    //             label: group.tenCumRap
    //         }
    //     })
    //     setGroupItems(items)
    // }
    // let getScheduleList = (event) => {
        

    // }
    // let SystemRender = () => {
    //     return <div>
    //         <h5>Hệ Thống Rạp</h5>
    //         <Menu onClick={getGroupItems} items={systemItems} theme="light" mode="inline" defaultSelectedKeys={['1']} />
    //     </div>
    // }
    // let GroupRender = () => {
    //     return <div>
    //         <h5>Cụm Rạp</h5>
    //         <Menu onClick={getScheduleList} items={groupItems} theme="light" mode="inline" defaultSelectedKeys={['1']} />
    //     </div>
    // }
    // let ScheduleRender = () => {
    //     return <div>
    //         <h5>Danh sách phim theo rạp</h5>
    //         <Radio.Group>
    //             <Space size={'small'}>
    //                 <Radio.Button value="1">Date</Radio.Button>
    //                 <Radio.Button value="2">Date</Radio.Button>
    //                 <Radio.Button value="3">Date</Radio.Button>
    //                 <Radio.Button value="4">Date</Radio.Button>
    //                 <Radio.Button value="5">Date</Radio.Button>
    //                 <Radio.Button value="6">Date</Radio.Button>
    //             </Space>
    //         </Radio.Group>
    //         <Card title="Tên Rạp">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, cupiditate!
    //         </Card>
    //         <Card title="Danh Sách Phim">
    //             Card content
    //         </Card>
    //     </div>
    // }
        
    useEffect(() => {    
    }, [])
    return (
        <div>
            <h4>Mua vé theo rạp</h4>
            <Cascader options={[]} placeholder="Please select" />
        </div >

    )
}
