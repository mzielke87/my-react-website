import React from 'react';

import myLogo from '../../assets/logo.svg';
import './Logo.css';

const logo = (props) => (
    <div className="Logo" style={{height: props.height}}>
        <img src={myLogo} alt="MyLogo" />
    </div>
);

export default logo;