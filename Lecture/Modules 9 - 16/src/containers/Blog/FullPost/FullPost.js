import { useState, useEffect } from 'react';
import axios from 'axios';
import './FullPost.css';

const FullPost = props => {
    
    const [selectedPost, setSelectedPost] = useState(null)

    useEffect(() => {
        // This is implemented onUpdate when the selectedPostId state changes
        if(props.id)
            axios.get(`/posts?id=${props.id}`)
            .then(res => {
                setSelectedPost(res.data[0])
                console.log('FullPost Update')
            })
    }, [props.id])

    const deletePostHandler = () => {
        axios.delete('/posts/' + props.id)
            .then(res => {
                console.log(res)
            })
    }

    let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
    if(props.id) {
        post = <p style={{textAlign: 'center'}}>Loading ...</p>;
        if(selectedPost)
            post = (
                <div className="FullPost">
                    <h1>{ selectedPost.title.substring(0,10) }</h1>
                    <p>{ selectedPost.body }</p>
                    <div className="Edit">
                        <button className="Delete" onClick={deletePostHandler}>Delete</button>
                    </div>
                </div>
            );
    }
    return post;
}

export default FullPost;