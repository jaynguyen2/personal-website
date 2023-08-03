import { useParams } from "react-router-dom";
import useFetchData from "./useFetchData";

const PostDetails = () => {

    const { id } = useParams();
    const { data, pendingState, error} = useFetchData('http://localhost:8000/blogs/' + id);

    return (
        <div className="PostDetails">
            {pendingState && <div> Loading Post... </div>}
            {error && <div>{error}</div>}
            { data && (
            <article>
                <h2> Post Details of Blog {id}: </h2>
                <h2>
                    {data.title}
                </h2>
                <p> {data.body} </p>
                <div>
                    Written by {data.author}
                </div>
            </article>)
            }
        </div>
     );
}
 
export default PostDetails;