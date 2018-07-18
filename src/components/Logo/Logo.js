import React from 'react';

// import myLogo from '../../assets/logo.svg';
import myLogo from '../../assets/MZ_logo1.png';
import './Logo.css';

const logo = (props) => (
    <div className="Logo" style={{height: props.height}} onClick={() => props.logoClicked()}>
        <img src={myLogo} alt="MyLogo" />
    </div>
);

export default logo;