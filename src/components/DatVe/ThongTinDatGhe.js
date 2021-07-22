import React, { Component } from 'react'

export default class ThongTinDatGhe extends Component {
    render() {
        return (
            <div className="thong-tin-dat-ghe">
                <div className="mt-5">
                    <div className="text-start">
                        <button className="gheDuocChon"></button>
                        <span className="text-light" style={{fontSize: '30px'}}>Ghế đã đặt</span>
                    </div>
                    <div className="text-start">
                        <button className="gheDangChon"></button>
                        <span className="text-light" style={{fontSize: '30px'}}>Ghế đang đặt</span>
                    </div>
                    <div className="text-start">
                        <button className="ghe"></button>
                        <span className="text-light" style={{fontSize: '30px'}}>Ghế chưa đặt</span>
                    </div>
                </div>
                <div className="mt-5">
                    <table className="table order-table">
                        <thead>
                            <tr>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th>Huỷ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
