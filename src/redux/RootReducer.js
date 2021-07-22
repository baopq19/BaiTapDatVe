import { combineReducers } from 'redux';
import datVeReducer from './DatVeReducer';

const rootReducer = combineReducers({
    stateDatVe: datVeReducer,
})

export default rootReducer;