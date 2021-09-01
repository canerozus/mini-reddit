import React, { useState } from 'react'
import { useEffect,  } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../store/postSlice';

export default function Posts() {
    const url = useSelector(state =>{state.posts.url})
    const posts = useSelector(state => {state.posts.posts})
    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(getPosts(url))
        console.log(posts)
    }, [dispatch, url])
    
  
    return (
        <div>
            
        </div>
    )
}

