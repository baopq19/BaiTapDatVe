import React, { Component } from 'react';
import {connect} from 'react-redux';

class ThongTinDatGhe extends Component {

    calculateTongTien = () => {
        let tongTien = 0;
        if(this.props.danhSachGheDangDat?.length > 0) {
            this.props.danhSachGheDangDat.forEach(ghe => {
                tongTien += ghe.gia;
            }); 
        }
        return tongTien.toLocaleString();
    }

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
                            {
                                this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                                    return <tr key={index}>
                                        <td>{gheDangDat.soGhe}</td>
                                        <td>{gheDangDat.gia}</td>
                                        <td><span onClick={() => {this.props.huyGhe(gheDangDat)}} style={{fontSize: 30, color: 'red', cursor: 'pointer'}}>X</span></td>
                                    </tr>
                                })
                            }
                            <tr>
                                <th></th>
                                <th>Tổng tiền</th>
                                <th>{this.calculateTongTien()}</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat: state.datVeReducer.danhSachGheDangDat,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        huyGhe: (gheDangDat) => {
            dispatch({
                type: 'HUY_GHE',
                gheDangDat
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ThongTinDatGhe);