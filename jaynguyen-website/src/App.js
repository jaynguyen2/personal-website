import logo from './logo.svg';
import './styles/App.css';
import Navigationbar from './navigationbar';
import Contact from './Contact';
import Home from './Home';
import Blog from './Blog';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigationbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={(<><Home /></>)}/>
            <Route path="/Blog" element={(<><Blog /></>)}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

/** 
element={<Blog />}
DOMS:
document.createElement
document.getElementById

documentVar.innerHTML (string)
documentVar.setAttribute (HTML element setting in html)

documentVar.appendChild / append, appending to html element document.

**/