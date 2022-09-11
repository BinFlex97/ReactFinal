import { Carousel } from 'antd';
import React, { useState } from 'react'
import { homeService } from '../../../Service/HomeService';
import { GetListAPI } from '../../../Service/Service';
import { BANNER_URL } from '../../../ultil/setting';



const contentStyle = {
  height: '750px',
  width: '100%',
  color: '#fff',
  textAlign: 'center',
  background: '#364d79',
};

let RenderBanner = () => {
  
  let [ bannerArr, setBannerArr ] = useState([])
  
  homeService.GetBannerList().then((result) => {
    setBannerArr(result.data.content);
  }).catch((error) => {
    console.log(error)
  })
  
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
