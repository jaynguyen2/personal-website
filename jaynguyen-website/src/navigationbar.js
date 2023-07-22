

const navigationbar = () => {
    return ( 
        <nav className="navigation-bar">
            <div class="top-right-nav">
                <a id="active" href="App.js">01. About</a>
                <a href="projects.html">02. Personal Projects</a>
                <a href="blog.html">03. Blog</a>
                <a href="sm-analysis.html">04. Technical Anlaysis</a>
                <a href="contact.html">05. Contact</a>
                <button id="cv-button" href="/db/docs/JayNguyen-CV.pdf">Resume</button>
            </div>
        </nav> 
     );
}
 
export default navigationbar;
