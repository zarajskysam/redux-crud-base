import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, CHOOSE_SERVICE_ID, CHANGE_SERVICE_FIELD_EDIT, EDIT_SERVICE, ADD_FILTERED_VALUE, RETURN_VALUE } from './actionTypes';

export function addService(name, price) {
    return { type: ADD_SERVICE, payload: {name, price} };
}

export function removeService(id) {
    return { type: REMOVE_SERVICE, payload: { id } };
}

export function changeServiceField (name, value) {
    return { type: CHANGE_SERVICE_FIELD, payload: { name, value } }
}

export function chooseServiceId (items, id) {
    return { type: CHOOSE_SERVICE_ID, payload: { items, id } };
}

export function changeServiceFieldEdit(name, value) {
    return { type: CHANGE_SERVICE_FIELD_EDIT, payload: { name, value } }
}

export function editService(item) {
    return { type: EDIT_SERVICE, payload: { item } }
}

export function addValue(val) {
    return { type: ADD_FILTERED_VALUE, payload: { val } }
}

export function returnValue() {
    return { type: RETURN_VALUE, payload: { }}
}
