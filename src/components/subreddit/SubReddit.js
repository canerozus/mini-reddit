import React from 'react'
import { useDispatch } from 'react-redux';
import "./SubReddit.css"
import { setUrl } from '../../store/postSlice';

export default function SubReddit(props) {
    const { data } = props;
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(setUrl(data.url.slice(3)))
    }
    return (
        <div>
            <button onClick={clickHandler}>
                <h4>{data.display_name}</h4>
            </button>
        </div>
    )
}
