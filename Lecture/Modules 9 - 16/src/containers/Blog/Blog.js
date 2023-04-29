import { Routes, Route, NavLink } from 'react-router-dom';
import './Blog.css';
import Posts from '../Posts/Posts';
import NewPost from './NewPost/NewPost'

const Blog = () => {
    return (
        <div className="Blog">
            <header>
                <nav>
                    <ul>
                        <li><NavLink to="/"
                        // activeClassName="active"
                        activeStyle={{color: 'green'}}
                        exact> Home </NavLink></li>
                        <li><NavLink to={{
                            pathname: '/new-post',
                            hash: '#top',
                            search: '?new=true',
                            exact: true
                        }}>New Post</NavLink></li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path="/" exact element={ <Posts /> }/>
                <Route path="/new-post" element={ <NewPost /> }/>
                <Route path="/:id" element={ <Posts /> }/>
            </Routes>
        </div>
    );
}


export default Blog;