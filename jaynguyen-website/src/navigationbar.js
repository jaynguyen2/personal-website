import { Link } from 'react-router-dom';

const buttonClick = () => {
    console.log("Loading Jay Nguyen's CV...");
}

const navigationbar = () => {
    return ( 
        <nav className="navigation-bar">
            <div class="top-right-nav">
                <Link to="./">01. About</Link>
                <Link to="projects.html">02. Personal Projects</Link>
                <Link to="./Blog">03. Blog</Link>
                <Link to="sm-analysis.html">04. Technical Anlaysis</Link>
                <Link to="contact.html">05. Contact</Link>
                <button onClick={buttonClick} id="cv-button" href="./docs/JayNguyen-CV.pdf">Resume</button>
            </div>
        </nav> 
     );
}
 
export default navigationbar;
