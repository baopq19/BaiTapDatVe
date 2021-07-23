const stateDatVe = {
    danhSachGheDangDat: [
    ]
}

const datVeReducer = (state = stateDatVe, action) => {
    switch (action.type) {
        case 'DAT_GHE': {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let indexGheDangDat = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);
            if (indexGheDangDat !== -1) {
                danhSachGheDangDatUpdate.splice(indexGheDangDat,1);
            } else {
                danhSachGheDangDatUpdate.push(action.ghe);
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;
            return {...state};
        }
        case 'HUY_GHE': {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let indexGheDangDat = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.gheDangDat.soGhe);
            if (indexGheDangDat !== -1) {
                danhSachGheDangDatUpdate.splice(indexGheDangDat,1);
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;
            return {...state};
        }
        default: return {...state};
    }
}

export default datVeReducer;