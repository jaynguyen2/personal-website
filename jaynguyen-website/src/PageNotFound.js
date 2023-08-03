import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="Page-Not-Found">
            <h2>Page Not Found</h2>
            <p>
                Sorry page cannot be found or is unavailable.
            </p>
            <Link to="/" className="BackHome"> Back to Home </Link>
        </div>
    );
}
 
export default PageNotFound;