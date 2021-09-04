import React from 'react'
import './post.css';

export default function Post(props) {
    const { data } = props;
    return (
        <div>
            <h4>{data.author}</h4>
            <h2>{data.title}</h2>
        </div>
    )
}
