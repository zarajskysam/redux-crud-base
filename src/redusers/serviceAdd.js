import { CHANGE_SERVICE_FIELD, RETURN_VALUE } from '../actions/actionTypes';

const initialState = {
    name: '',
    price: ''
} 

export default function serviceAddReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SERVICE_FIELD:
            const { name, value } = action.payload;
            return { ...state, [name]: value };
        case RETURN_VALUE:
            state = initialState;
            return state;
        default:
            return state;
    }
}