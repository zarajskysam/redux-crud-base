import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { chooseServiceId, removeService, addValue } from '../actions/actionCreators';
import ServiceList from './ServiceList';
import ServiceAdd from './ServiceAdd';
import ServiceEdit from './ServiceEdit';
import ServiceFilter from './ServiceFilter';

export default function ServicePage () {

    const [ edit, setEdit ] = useState(false); 
    const items = useSelector(state => state.serviceList);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addValue(''));
    }, [])

    

    function editHandler(id) {
        dispatch(chooseServiceId(items.content, id));
        setEdit(true)
    }

    function removeHandler(id) {
        dispatch(removeService(id));
        dispatch(addValue(''));
        setEdit(false);
    }

    function cancelHandler() {
        setEdit(false);
    }

    function saveHandler() {
        setEdit(false);
    }

    function filterItems(value) {
        dispatch(addValue(value));
        console.log(items);
    }

    return (
        <Fragment>
            <ServiceFilter filterItems={filterItems} />
            { edit ? <ServiceEdit cancelHandler={cancelHandler} saveHandler={saveHandler}/> : <ServiceAdd />}
            <ServiceList clickEdit={editHandler} clickRemove={removeHandler}/>
        </Fragment>    
    )
}