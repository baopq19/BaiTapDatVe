import React, { Component } from 'react'

import {connect} from 'react-redux';
class HangGhe extends Component {

    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            if(this.props.hangGhe.hang === '') {
                return <span className="rowNumber ms-3" key={index}>{ghe.soGhe}</span>
            }

            let cssGheDaDat = '';
            let disable = false;
            if (ghe.daDat) {
                cssGheDaDat = 'gheDuocChon';
                disable = true;
            }
            
            let cssGheDangChon = '';
            if (this.props.danhSachGheDangDat?.length > 0) {
                let indexGheDangChon = this.props.danhSachGheDangDat.findIndex(gheDangChon => gheDangChon.soGhe === ghe.soGhe);
                if(indexGheDangChon !== -1) {
                    cssGheDangChon = 'gheDangChon';
                }
            }

            return <button onClick={() => {this.props.datGhe(ghe)}} disabled={disable} className={`ghe ${cssGheDaDat} ${cssGheDangChon} ms-3`} key={index}>
                {ghe.soGhe}
            </button>
        })
    }

    render() {
        return (
            <div className="text-light text-start mt-4 ms-5">
                <div className="ms-5">
                    <span className="hangGhe">
                        {this.props.hangGhe.hang}
                    </span>
                    {this.renderGhe()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        danhSachGheDangDat:state.datVeReducer.danhSachGheDangDat,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        datGhe: (ghe) => {
            dispatch({
                type: 'DAT_GHE',
                ghe
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (HangGhe);