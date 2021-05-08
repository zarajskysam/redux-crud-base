import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeServiceFieldEdit, editService } from '../actions/actionCreators';

export default function ServiceEdit({cancelHandler, saveHandler}) {

    const item = useSelector(state => state.serviceEdit);

    const dispatch = useDispatch();

    function cancelEvent (e) {
        e.preventDefault();
        cancelHandler();
    }

    function changeHandler(e) {
        const { name, value } = e.target;
        dispatch(changeServiceFieldEdit(name, value));
    }

    function saveEvent(e) {
        e.preventDefault();
        dispatch(editService(item));
        saveHandler();
    }

    return(
        <form className='service-add_form' key={item.id} data-id={item.id}>
            <input type='text' name='name' className='service-add_form_input' onChange={changeHandler} defaultValue={item.name} />
            <input type='number' name='price'className='service-add_form_input' onChange={changeHandler} defaultValue={item.price} />
            <button type='submit' className='servise-add_form_save' onClick={(e) => saveEvent(e)}>Save</button>
            <button className='servise-add_form_save' onClick={(e) => cancelEvent(e)}>Cancel</button>
        </form>
    )
}
