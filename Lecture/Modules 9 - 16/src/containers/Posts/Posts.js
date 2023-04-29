import { useEffect, useState } from "react"
import axios from '../../axiosInstance'; // Import axios from the instance we created
import Post from "../../components/Post/Post"
import './Posts.css'

const Posts = () => {

    const [posts, setPosts] = useState([])
    const [selectedPostId, setSelectedPostId] = useState(null)

    useEffect(() => {
        axios.get('/posts')
            .then(res => {
            //    console.log(res)
                const posts = res.data.slice(0,6).map((post) => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                })
                setPosts(posts)
            })
            .catch(e => {
                console.log('Error: ' + e)
            })
    }, [])

    const postClickedHandler = (id) => {
        setSelectedPostId(id)
    }


    return (
        <section className="Posts">
            { posts.map((post) => {
                return <Post key={post.id} title={post.title} author={post.author} 
                    clicked={() => postClickedHandler(post.id)}/>
            }) }
        </section>
            )
}

export default Posts