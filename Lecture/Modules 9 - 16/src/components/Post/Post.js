import { useEffect } from 'react';
import { useLocation } from 'react-router';
import './Post.css';

const Post = (props) => {
    const location = useLocation()
    useEffect(() => {
        console.log(location)
        console.log(props)
    }, [location, props])

    return (
        <article className="Post" onClick={props.clicked}>
            <h1>{ props.title.substring(0, 10) }</h1>
            <div className="Info">
                <div className="Author">{ props.author }</div>
            </div>
        </article>
    )
}

export default Post;