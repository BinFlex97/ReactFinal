import { Cascader, Divider } from 'antd'
import React, { useEffect, useState } from 'react'
import { homeService } from '../../../Service/HomeService'
const dropdownRender = (menus) => {
    return <div>
        {menus}
        <Divider
            style={{
                margin: 0,
            }}
        />
        <div
            style={{
                textAlign: "center",
                width: "100%",
                padding: 8,
            }}
        >
            The footer is not very short.
        </div>
    </div>
}
export default function MovieSchedule() {
    let [data, setData] = useState([])
    let options = [];

    let GetData = () => {
        homeService.GetMoviesSchedule().then((result) => {
            setData(result.data.content);
        }).catch((error) => {
            console.log(error)
        })
    }
    let MovieOptions = (arr) => {
        return arr.map((group, index) => {
            return {
                value: index,
                label: group.tenPhim,
            }
        })
    }
    let GroupOptions = (arr) => {
        return arr.map((group, index) => {
            return {
                value: index,
                label: group.tenCumRap,
                children: MovieOptions(group.danhSachPhim)
            }
        })
    }
    let SystemOptions = () => {
        return data.map((system, index) => {
            return {
                value: index,
                label: system.tenHeThongRap,
                children: GroupOptions(system.lstCumRap)
            }
        })
    }

    options = SystemOptions();
    useEffect(() => {
        GetData();
    }, [])
    return (
        <div style={{ height: "500px" }}>
            <h4>Mua vé theo rạp</h4>
            <Cascader
                options={options}
                dropdownRender={dropdownRender}
                style={{ width: '100%', }}
                placeholder="Please select" />
        </div >
    )
}
