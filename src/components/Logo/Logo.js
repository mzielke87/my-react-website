import React from 'react';

import myLogo from '../../assets/logo.svg';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={myLogo} alt="MyLogo" />
    </div>
);

export default logo;