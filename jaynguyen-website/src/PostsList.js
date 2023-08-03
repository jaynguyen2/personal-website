import { Link } from "react-router-dom";

//Method to list all blog posts/posts for a specific website - Reusuable code that'll work for posts.

const PostList = (props) => {
    const blogs = props.allPosts;
    const title = props.title;

    return ( 
        <div className="post-list">
            <h2>{title}</h2>
            <div className="blogs-list">
                {blogs.map((post) => (
                    <div className="post-preview" key={post.id}>
                        <Link to={`/blog/${post.id}`}>
                            <h3>{post.title}</h3>
                            <p> written by {post.author}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default PostList;