import logo from './logo.svg';
import './styles/App.css';
import Navigationbar from './navigationbar';
import Contact from './Contact';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;

/** 

DOMS:
document.createElement
document.getElementById

documentVar.innerHTML (string)
documentVar.setAttribute (HTML element setting in html)

documentVar.appendChild / append, appending to html element document.

**/