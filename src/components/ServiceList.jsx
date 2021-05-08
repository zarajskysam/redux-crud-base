import React from 'react';
import { useSelector } from 'react-redux';

export default function ServiceList({clickEdit, clickRemove}) {

    const items = useSelector(state => state.serviceList);


    function removeHandler(id) {
        clickRemove(id);
    }

    function editHandler(idEdit) {
        clickEdit(idEdit);
    }


    return(
        <ul className='items'>
            {items.filtered.map(o => (
                <li className='item' key={o.id}>
                    <span className='item_name'>{o.name}</span>
                    <span className='item_price'>{o.price}</span>
                    <button className='item_edit' onClick={() => editHandler(o.id)}>Edit</button>
                    <button className='item_remove' onClick={() => removeHandler(o.id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}