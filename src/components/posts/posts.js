import React, { useState } from 'react'
import { useEffect,  } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../store/postSlice';

export default function posts() {
    const url = useSelector(state =>{state.posts.url})
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts(url))
    }, [dispatch, url])
  
    return (
        <div>
            
        </div>
    )
}

