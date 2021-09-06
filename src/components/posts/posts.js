import { useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../store/postSlice';
import Post from '../post/post';
import "./Posts.css";

export default function Posts() {
    const loading = useSelector(state => state.posts.loading);
    const error = useSelector(state => state.posts.error);
    const url = useSelector(state => state.posts.url);
    const posts = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();
    


    useEffect(() => {
        dispatch(getPosts(url))
    }, [dispatch, url])


    return (
        <div className='posts'>
            {loading ? 'loading' : (error ? 'erroR' : 
            <ul>
                {posts.map(data => <Post data={data.data}/>)}
            </ul>
            )}
        </div>
    )
}

