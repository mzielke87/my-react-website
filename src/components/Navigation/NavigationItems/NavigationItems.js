import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
    return (
        <ul className='NavigationItems'>
            {/* <NavigationItem link="/Home" linkClicked={() => props.linkClicked('home')} active={props.currentNav === 'home' || props.currentNav === 'none' ? true : false}>Home</NavigationItem> */}
            {/* <NavigationItem link="/Work" linkClicked={() => props.linkClicked('work')} active={props.currentNav === 'work' ? true : false}>Work</NavigationItem> */}
            <NavigationItem link="/Projects" linkClicked={() => props.linkClicked('projects')} active={props.currentNav === 'projects' || props.currentNav === 'none' ? true : false}>Projects</NavigationItem>
            {/* <NavigationItem link="/Blog" linkClicked={() => props.linkClicked('blog')} active={props.currentNav === 'blog' ? true : false}>Blog</NavigationItem> */}
            <NavigationItem link="/Contact" linkClicked={() => props.linkClicked('contact')} active={props.currentNav === 'contact' ? true : false}>Contact</NavigationItem>
        </ul>
    );
}

export default navigationItems;