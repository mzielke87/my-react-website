import React from 'react';
import Aux from '../../hoc/Auxx/Auxx';
import Logo from '../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import './Toolbar.css';

const Toolbar = (props) => (    
    <Aux>
        <header className='Toolbar'>
            <div>
                <Logo />
            </div>
            <nav className='Nav'>
                <NavigationItems linkClicked={props.linkClicked} currentNav={props.currentNav}/>
            </nav>
        </header>
    </Aux>
)

export default Toolbar;