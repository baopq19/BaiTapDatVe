import React, { Component } from 'react';
import './BaiTapBookingTicket.css';
import ThongTinDatGhe from './ThongTinDatGhe';

export default class BookingTicket extends Component {
    render() {
        return (
            <div className="booking-ticket">
                <div className="dark-filter">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col col-8">
                                <h1 className="mt-0 text-warning">BÀI TẬP ĐẶT VÉ XEM PHIM CYBERSOFT</h1>
                                <div className="mt-4">
                                    <h4 className="text-light">Màn hình</h4>
                                    <div className="screen">

                                    </div>
                                </div>
                            </div>
                            <div className="col col-4">
                                <h1 className="mt-0 text-light">CÁC GHẾ BẠN ĐÃ CHỌN</h1>
                                <ThongTinDatGhe />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}
