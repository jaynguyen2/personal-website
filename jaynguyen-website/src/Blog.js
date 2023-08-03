import {useState, useEffect} from 'react';
import PostList from './PostsList';
import useFetchData from './useFetchData';
import SubscribeBlog from './SubscribeBlog';

const Blog = () => {

    //Initialise variables and arrays
    let writeNewPost = "Write your blog post below:";
    let createPost = "Create a new blog post:";
    let writeNewPostSuccess = "Successfully submitted new blog";
    let urlLink = "http://localhost:8000/blogs"
    let statusID = 0;
    const title = "All Blogs Posts:"

    //Set up react and custom react hooks for blogs page:
    const [newPostSuccess, setName] = useState("Create a new blog post:");
    const {data: blogs, pendingState, error} = useFetchData(urlLink);

    const blogButtonClick = () => {
        if (statusID == 0) {
            setName(writeNewPost);
        }
        else if (statusID == 1) {
            setName(writeNewPostSuccess);
        }
        statusID = 0; 
    }

    return ( 
        <div className="blog">
            <p> {newPostSuccess} </p>
            <button onClick={blogButtonClick} id="blog-buttons">New Post</button>
            {error && <div>{error}</div>}
            {pendingState && <div> Loading blogs...</div>}
            {blogs && <PostList allPosts={blogs}/> }
            <SubscribeBlog />

        </div>
    );
}
export default Blog;

/* 
<Link to="/SubscribeBlog">Subscribe</Link> 



*/