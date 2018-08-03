import React from 'react';
import Aux from '../../hoc/Auxx/Auxx';
import Logo from '../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import './Toolbar.css';

const Toolbar = (props) => (    
    <Aux>
        <header className='Toolbar'>
            <div className='hamburger' onClick={() => props.logoClicked()}>
                <i className="fa fa-bars" aria-hidden="true"></i>
                <Logo height={35} />
            </div>
            <nav className='Nav'>
                <NavigationItems linkClicked={props.linkClicked} currentNav={props.currentNav}/>
            </nav>
        </header>
    </Aux>
);

export default Toolbar;