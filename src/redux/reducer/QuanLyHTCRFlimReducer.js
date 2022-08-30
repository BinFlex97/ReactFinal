const stateDefault = {
    data: {
        "heThongRapChieu": [
            {
                "cumRapChieu": [
                    {
                        "lichChieuPhim": [
                            {
                                "maLichChieu": "45226",
                                "maRap": "462",
                                "tenRap": "Rạp 2",
                                "ngayChieuGioChieu": "2022-08-01T15:00:00",
                                "giaVe": 120000,
                                "thoiLuong": 120
                            }
                        ],
                        "maCumRap": "bhd-star-cineplex-bitexco",
                        "tenCumRap": "BHD Star Cineplex - Bitexco",
                        "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
                        "diaChi": "L3-Bitexco Icon 68, 2 Hải Triều, Q.1"
                    },
                    {
                        "lichChieuPhim": [
                            {
                                "maLichChieu": "45227",
                                "maRap": "479",
                                "tenRap": "Rạp 9",
                                "ngayChieuGioChieu": "2022-08-22T21:00:00",
                                "giaVe": 120000,
                                "thoiLuong": 120
                            }
                        ],
                        "maCumRap": "bhd-star-cineplex-pham-hung",
                        "tenCumRap": "BHD Star Cineplex - Phạm Hùng",
                        "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
                        "diaChi": "L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh"
                    }
                ],
                "maHeThongRap": "BHDStar",
                "tenHeThongRap": "BHD Star Cineplex",
                "logo": "https://movienew.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png"
            },
            {
                "cumRapChieu": [
                    {
                        "lichChieuPhim": [
                            {
                                "maLichChieu": "45225",
                                "maRap": "730",
                                "tenRap": "Rạp 10",
                                "ngayChieuGioChieu": "2022-08-22T09:00:00",
                                "giaVe": 120000,
                                "thoiLuong": 120
                            }
                        ],
                        "maCumRap": "cns-hai-ba-trung",
                        "tenCumRap": "CNS - Hai Bà Trưng",
                        "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
                        "diaChi": "135 Hai Bà Trưng, Bến Nghé, Q.1[Bản đồ]"
                    }
                ],
                "maHeThongRap": "CineStar",
                "tenHeThongRap": "CineStar",
                "logo": "https://movienew.cybersoft.edu.vn/hinhanh/cinestar.png"
            }
        ],
        "maPhim": 9662,
        "tenPhim": "The Tomorrow War 2",
        "biDanh": "the-tomorrow-war-2",
        "trailer": "https://youtu.be/QPistcpGB8o",
        "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/the-tomorrow-war_gp01.png",
        "moTa": "Cuộc chiến tương lai (The Tomorrow War) là bộ phim hành động khoa học viễn tưởng chiến tranh của Mỹ, sản xuất năm 2021 do Chris McKay đạo diễn, phụ trách hình ảnh do David Ellison, Dana Goldberg, Don Granger, David S. Goyer, Jules Daly và Adam Kolbrenner sản xuất, với kịch bản được viết bởi Zach Dean. Dàn diễn viên của bộ phim dự kiến bao gồm Chris Pratt (nổi tiếng với vai Star-Lord trong Vệ binh dải Ngân hà), Yvonne Strahovski, J.K. Simmons, Betty Gilpin, Sam Richardson, Edwin Hodge, Jasmine Mathews, Ryan Kiera Armstrong và Keith Powers.",
        "maNhom": "GP01",
        "hot": true,
        "dangChieu": false,
        "sapChieu": true,
        "ngayKhoiChieu": "2022-08-21T17:04:08.723",
        "danhGia": 10
    }
};
export const QuanLyHTCRFilmReducer = (state = stateDefault, action) => {
    return { ...state };
};