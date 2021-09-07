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
        <div className="subreddit">
            {data.icon_img ? (
                <button onClick={clickHandler} className="sub-button">
                    <img src={data.icon_img} alt="icon" />
                    <h4>{data.display_name}</h4>
                </button>
            ) : (
                <button onClick={clickHandler} className="sub-button">
                    <span className="empty-icon"></span>
                    <h4>{data.display_name}</h4>
                </button>
            )}
        </div>
    )
}
