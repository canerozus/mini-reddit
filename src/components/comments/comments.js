import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getComments } from '../../store/commentSlice';
import Comment from '../comment/comment'

export default function Comments(props) {
    const { data } = props;
    const comments = useSelector(state => state.comments.comments)
    const loading = useSelector(state => state.comments.loading);
    const error = useSelector(state => state.comments.error)
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(data)
        dispatch(getComments(data.permalink))
    }, [dispatch])

    return (
        <div className="Comments">
            {loading ? 'loading' : (error ? 'Error' :
                <ul>{comments.map(item => { return <Comment data={item.data} /> })}</ul>
            )}
        </div>
    )
}
