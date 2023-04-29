import { useEffect, useState } from 'react';
import axios from 'axios';
import './NewPost.css';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const NewPost = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('Max')
    
    const location = useLocation()
    useEffect(() => {
        console.log(location)
    }, [location])

    const postDataHandler = () => {
        const data = {
            title,
            content,
            author
        }

        axios.post('/posts', data)
            .then(res => {
                console.log(res)
            })
    }

    return (
        <div className="NewPost">
            <h1>Add a Post</h1>
            <label><Link to={'title'}>Title</Link></label>
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
            <label>Content</label>
            <textarea rows="4" value={content} onChange={(event) => setContent(event.target.value)} />
            <label>Author</label>
            <select value={author} onChange={(event) => setAuthor(event.target.value)}>
                <option value="Max">Max</option>
                <option value="Manu">Manu</option>
            </select>
            <button onClick={postDataHandler}>Add Post</button>
        </div>
    );
}

export default NewPost;