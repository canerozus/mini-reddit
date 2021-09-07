import React, { useState } from 'react'
import Comments from '../comments/comments';
import './post.css';

export default function Post(props) {
    const { data } = props;
    const [showComment, setShowComment] = useState()
    return (
        <div className="post">
            <div className="content">
                <div>
                    <p>{data.subreddit_name_prefixed}</p>
                    <h3>{data.title}</h3>
                </div>
                {data.is_video && (
                    <div className="media">
                        <video controls>
                            <source
                                src={data.media.reddit_video.fallback_url}
                                type="video/mp4"
                            />
                        </video>
                    </div>
                )}
                {data.is_reddit_media_domain && !data.is_video && (
                    <div className="media">
                        <img src={data.url_overridden_by_dest} alt={data.title} />
                    </div>
                )}

            </div>
            <div className="footer">
                    <p>{data.author}</p>
                    <Comments data={data} />
            </div>
        </div>

    )
}
