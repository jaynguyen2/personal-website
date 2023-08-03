const SubscribeBlog = () => {
    return ( 
        <div className="subscribe-blog-form">
            <h2> Subscribe to Blog </h2>
            <form>
                <title>Subscribe Blog Form: </title>
                <label for="fname">First Name: </label>
                <input type="text" for="fname" name="fname" required /> <br/>
                <label for="lname">Last Name: </label>
                <input type="text" for="lname"  name="lname" required /><br/>

                <label>E-Mail Address: </label>
                <input type="email" required /><br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
     );
}
 
export default SubscribeBlog;

/* 
                <label>Email:</label>
                <label>Blog Author:</label>
                <select>
                    <option value="">

                    </option>
                </select>

*/