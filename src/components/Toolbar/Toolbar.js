import React from 'react';
// import {Link, Route} from 'react-router-dom';
// import Home from './Home/Home';
// import Work from './Work/Work';
import Aux from '../../hoc/Auxx/Auxx';
import Logo from '../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import './Toolbar.css';

const Toolbar = (props) => (    
    <Aux>
        <header className='Toolbar'>
            <div className='Logo'>
                <Logo />
            </div>
            {/* <nav className='Nav'>
                <Link to="/Home" onClick={props.linkClicked}>Home</Link>
                <Link to="/Work" onClick={props.linkClicked}>Work</Link>
            </nav> */}
            <nav className='Nav'>
                <NavigationItems linkClicked={props.linkClicked} currentNav={props.currentNav}/>
            </nav>
        </header>
        {/* <div className='main'>
            <Route path="/Home" component={Home}/>
            <Route path="/Work" component={Work}/>
        </div> */}
    </Aux>
)

export default Toolbar;