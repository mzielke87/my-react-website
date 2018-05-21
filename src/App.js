import React from 'react';
import {Link, Route, Redirect} from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
import Home from './containers/Home/Home';
import Work from './containers/Work/Work';
import LinkedInLogo from './assets/In-2C-28px-R.png';

const linkedInLogoPadding = {
  padding: '2px'
};

const App = () => (

  <div>
    <Redirect from="/" to="/Home"/>
    {/* toolbar */}
    <nav>
      <Link to="/Home">Home</Link>
      <Link to="/Work">Work</Link>
    </nav>
    <div>
      <Route path="/Home" component={Home}/>
      <Route path="/Work" component={Work}/>
    </div>
    {/* footer */}
    <div>
      <a href="https://www.linkedin.com/in/matthew-zielke-a8a607128/" target="_blank" rel="noopener noreferrer">
        <img style={linkedInLogoPadding} src={LinkedInLogo} alt="Go to my LinkedIn Profile!" width="37" height="28" border="0"/>
      </a>
    </div>
  </div>
)

export default App;