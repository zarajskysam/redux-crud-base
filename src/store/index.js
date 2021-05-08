import { createStore, combineReducers } from 'redux';
import serviceListReduser from '../redusers/serviceList';
import serviceAddReducer from '../redusers/serviceAdd';
import serviceEditReducer from '../redusers/serviceEdit'; 

const reducer = combineReducers({
    serviceList: serviceListReduser,
    serviceAdd: serviceAddReducer,
    serviceEdit: serviceEditReducer,
}) 

const store = createStore(reducer);

export default store;