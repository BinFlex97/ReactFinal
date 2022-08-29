import React from 'react'


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Avatar, Card } from 'antd';
import { EyeOutlined, LikeOutlined, SettingOutlined,EditOutlined,EllipsisOutlined} from '@ant-design/icons';




const { Meta } = Card;

let arr = []
arr.length = 10

const renderCard = () => {
    return arr.map(() => {
        return <SwiperSlide className='mb-2'>
            <Card
                hoverable
                style={{
                    width: 180,
                }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
        </SwiperSlide>
    })
}
export default function MovieListSlides() {
    return (
        <div>
            <h4>Danh Sách Phim</h4>
            <Swiper
                spaceBetween={50}
                slidesPerView={5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="text-center "
            >
                <SwiperSlide className='mb-2'>
                    <Card
                        hoverable
                        style={{
                            width: 200,
                        }}
                        cover={
                            <img
                                alt="example"
                                src="https://movienew.cybersoft.edu.vn/hinhanh/aladin-2030_gp01.png"
                            />
                        }
                        actions={[
                            <EyeOutlined key="detail"/>,
                            <LikeOutlined key="like" />,
                        ]}
                    >
                        <Meta
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </SwiperSlide>
                <SwiperSlide className='mb-2'>
                    <Card
                        hoverable
                        style={{
                            width: 200,
                        }}
                        cover={
                            <img
                                alt="example"
                                src="https://movienew.cybersoft.edu.vn/hinhanh/aladin-2030_gp01.png"
                            />
                        }
                        actions={[
                            <EyeOutlined key="detail"/>,
                            <LikeOutlined key="like" />,
                        ]}
                    >
                        <Meta
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </SwiperSlide>
                <SwiperSlide className='mb-2'>
                    <Card
                        hoverable
                        style={{
                            width: 200,
                        }}
                        cover={
                            <img
                                alt="example"
                                src="https://movienew.cybersoft.edu.vn/hinhanh/aladin-2030_gp01.png"
                            />
                        }
                        actions={[
                            <EyeOutlined key="detail"/>,
                            <LikeOutlined key="like" />,
                        ]}
                    >
                        <Meta
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </SwiperSlide>
                <SwiperSlide className='mb-2'>
                    <Card
                        hoverable
                        style={{
                            width: 200,
                        }}
                        cover={
                            <img
                                alt="example"
                                src="https://movienew.cybersoft.edu.vn/hinhanh/aladin-2030_gp01.png"
                            />
                        }
                        actions={[
                            <EyeOutlined key="detail"/>,
                            <LikeOutlined key="like" />,
                        ]}
                    >
                        <Meta
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </SwiperSlide>
                <SwiperSlide className='mb-2'>
                    <Card
                        hoverable
                        style={{
                            width: 200,
                        }}
                        cover={
                            <img
                                alt="example"
                                src="https://movienew.cybersoft.edu.vn/hinhanh/aladin-2030_gp01.png"
                            />
                        }
                        actions={[
                            <EyeOutlined key="detail"/>,
                            <LikeOutlined key="like" />,
                        ]}
                    >
                        <Meta
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </SwiperSlide>
                <SwiperSlide className='mb-2'>
                    <Card
                        hoverable
                        style={{
                            width: 200,
                        }}
                        cover={
                            <img
                                alt="example"
                                src="https://movienew.cybersoft.edu.vn/hinhanh/aladin-2030_gp01.png"
                            />
                        }
                        actions={[
                            <EyeOutlined key="detail"/>,
                            <LikeOutlined key="like" />,
                        ]}
                    >
                        <Meta
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </SwiperSlide>
                <SwiperSlide className='mb-2'>
                    <Card
                        hoverable
                        style={{
                            width: 200,
                        }}
                        cover={
                            <img
                                alt="example"
                                src="https://movienew.cybersoft.edu.vn/hinhanh/aladin-2030_gp01.png"
                            />
                        }
                        actions={[
                            <EyeOutlined key="detail"/>,
                            <LikeOutlined key="like" />,
                        ]}
                    >
                        <Meta
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </SwiperSlide>
                <SwiperSlide className='mb-2'>
                    <Card
                        hoverable
                        style={{
                            width: 200,
                        }}
                        cover={
                            <img
                                alt="example"
                                src="https://movienew.cybersoft.edu.vn/hinhanh/aladin-2030_gp01.png"
                            />
                        }
                        actions={[
                            <EyeOutlined key="detail"/>,
                            <LikeOutlined key="like" />,
                        ]}
                    >
                        <Meta
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </SwiperSlide>
                





            </Swiper>
        </div>
    )
}
