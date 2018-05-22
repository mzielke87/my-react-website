import React from 'react';
import {Link, Route} from 'react-router-dom';
import Home from './Home/Home';
import Work from './Work/Work';
import Aux from '../../hoc/Auxx';

const Toolbar = () => (    
    <Aux>
        <nav>
            <Link to="/Home">Home</Link>
            <Link to="/Work">Work</Link>
        </nav>
        <div>
            <Route path="/Home" component={Home}/>
            <Route path="/Work" component={Work}/>
        </div>
    </Aux>
)

export default Toolbar;