import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
    return (
        <ul className='NavigationItems'>
            <NavigationItem link="/Home" linkClicked={() => props.linkClicked('home')} active={props.currentNav === 'home' || props.currentNav === 'none' ? true : false}>Home</NavigationItem>
            <NavigationItem link="/Work" linkClicked={() => props.linkClicked('work')} active={props.currentNav === 'work' ? true : false}>Work</NavigationItem>
        </ul>
    );
}

export default navigationItems;