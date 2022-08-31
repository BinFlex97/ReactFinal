import { Carousel } from 'antd';
import React, { useState } from 'react'
import { GetListAPI } from '../../../Service/Service';
import { BANNER_LINK } from '../../../ultil/setting';



const contentStyle = {
  height: '780px',
  width: '100%',
  color: '#fff',
  textAlign: 'center',
  background: '#364d79',
};

let RenderBanner = () => {
  
  let [ bannerArr, setBannerArr ] = useState([])
  GetListAPI(BANNER_LINK,setBannerArr)
  
  return bannerArr.map((banner,index) => {
    return <div key={index}>
      <img style={contentStyle} src={banner.hinhAnh} alt="" />
    </div>
  })
}
export default function Banner() {
  return (
    <div>
      <h1>Đặt Vé Xem Phim</h1>
      <Carousel autoplay>
        {RenderBanner()}
      </Carousel>
    </div>
  )
}
