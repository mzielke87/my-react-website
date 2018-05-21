import React from 'react';
import {Link, Route, Redirect} from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
import Home from './containers/Home/Home';

const App = () => (
  <div>
    <Redirect from="/" to="/Home"/>
    <nav>
      <Link to="/Home">Home</Link>
    </nav>
    <div>
      <Route path="/Home" component={Home}/>
    </div>
  </div>
)

export default App;