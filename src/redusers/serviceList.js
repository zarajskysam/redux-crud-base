import { nanoid } from 'nanoid';
import { ADD_SERVICE, REMOVE_SERVICE, EDIT_SERVICE, ADD_FILTERED_VALUE } from '../actions/actionTypes'

const initialState = {
    content: [
        { id: nanoid(), name: 'Замена стекла', price: 2000 },
        { id: nanoid(), name: 'Замена дисплея', price: 2500 }
    ],
    value: '',
    filtered: [],
}

export default function serviceListReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SERVICE:
            const { name, price } = action.payload;
            const newAddContent = [...state.content, { id: nanoid(), name, price: Number(price)}]
            return {...state, content: newAddContent};
        case REMOVE_SERVICE:
            const { id } = action.payload;
            const newRemoveContent = state.content.filter(service => service.id !== id)
            return {...state, content: newRemoveContent};
        case EDIT_SERVICE:
            const { item } = action.payload;
            state.content.forEach((o, index) => {
                if (o.id === item.id) {
                    state.content.splice(index, 1, item);
                }
            })
            return state;
        case ADD_FILTERED_VALUE: 
            const { val } = action.payload;
            if (!val) {
                return { ...state, filtered: state.content }
            }
            state.value = val;
            
            return { ...state, filtered: state.content.filter(o => o.name.toLocaleLowerCase().includes(state.value)) };
        default:
            return state;
    }
}