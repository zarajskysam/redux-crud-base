import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function ServiceFilter({ filterItems }) {

    function changeInput(e) {
        filterItems(e.target.value);
    }

    return(
        <input type='text' placeholder='Search' onChange={(e) => changeInput(e)} />
    )
}