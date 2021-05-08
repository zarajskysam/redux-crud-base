import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addService, changeServiceField, addValue, returnValue } from '../actions/actionCreators';

export default function ServiceAdd() {

    const item = useSelector(state => state.serviceAdd);
    const [ error, setError ] = useState(false);
    const dispatch = useDispatch();

    function submitHandler(e) {
        e.preventDefault();
        if (!item.name) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000)
            return;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        }
        dispatch(addService(item.name, item.price));
        dispatch(addValue(''));
        dispatch(returnValue());
        e.target.reset();
    }

    function changeHandler(e) {
        const { name, value } = e.target;
        dispatch(changeServiceField(name, value));
    }

    return(
        <form onSubmit={submitHandler} className='service-form'>
            <input type='text' name='name' className='service-form_input' onChange={changeHandler} />
            <input type='number' name='price'className='service-form_input'onChange={changeHandler} />
            <button className='servise-add_form_save'>Save</button>
            { error ? <div className='service-form_error'>Введите корректное наименование</div> : null }
        </form>
    )
}
