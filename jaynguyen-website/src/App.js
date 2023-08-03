import logo from './logo.svg';
import './styles/App.css';
import Navigationbar from './navigationbar';
import Contact from './Contacts';
import Home from './Home';
import Blog from './Blog';
import PostDetails from './PostDetails';
import TechnicalAnalysis from './TechnicalAnalysis';
import PersonalProjects from './PersonalProjects';
import Contacts from './Contacts';
import PageNotFound from './PageNotFound';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigationbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={(<><Home /></>)}/>
            <Route path="/PersonalProjects" element={(<><PersonalProjects/></>)}/>
            <Route path="/Contacts" element={(<><Contacts/></>)}/>
            <Route path="/Blog" element={(<><Blog /></>)}/>
            <Route path="/Blog/:id" element={(<><PostDetails /></>)}/>
            <Route path="/TechnicalAnalysis" element={(<><TechnicalAnalysis /></>)}/>
            <Route path="/TechnicalAnalysis/:id" element={(<><PostDetails /></>)}/>
            <Route path="*" element={(<><PageNotFound/></>)}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

/** 
element={<Blog />}

<Route path="/TechnicalAnalysis/:id" element={(<><PostDetails /></>)}/>

DOMS:
document.createElement
document.getElementById

documentVar.innerHTML (string)
documentVar.setAttribute (HTML element setting in html)

documentVar.appendChild / append, appending to html element document.

**/