import { useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import "./subReddits.css"
import { getSubReddits } from '../../store/subredditSlice';
import SubReddit from '../subreddit/SubReddit';

export default function SubReddits() {
    const subReddits = useSelector( state => state.subReddits.subReddits);
    const loading = useSelector(state => state.subReddits.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSubReddits())
    },[dispatch])

    return (
        <div className="subReddits">
            {loading ? 'loading' : <SubReddit/>}
        </div>
    )
}
