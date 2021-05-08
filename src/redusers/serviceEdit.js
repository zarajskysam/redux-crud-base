import { CHOOSE_SERVICE_ID, CHANGE_SERVICE_FIELD_EDIT } from '../actions/actionTypes';

const initialState = {
    id: 0, 
    name: '', 
    price: '',
}

export default function serviceEditReducer ( state = initialState, action ) {
    switch (action.type) {
        case CHOOSE_SERVICE_ID: 
            const { items, id } = action.payload;
            return items.find(o => o.id === id);
        case CHANGE_SERVICE_FIELD_EDIT: 
            const { name, value } = action.payload;
            return { ...state, [name]: value };
        default:
            return state;
    }
    
}