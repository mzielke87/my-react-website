import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className='NavigationItems'>
        <NavigationItem link="/Home" onClick={props.linkClicked} active>Home</NavigationItem>
        <NavigationItem link="/Work" onClick={props.linkClicked}>Work</NavigationItem>
    </ul>
);

export default navigationItems;