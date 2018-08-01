import React from 'react';

// import myLogo from '../../assets/logo.svg';
// import myLogo from '../../assets/MZ_logo1.png';
import './Logo.css';

const logo = (props) => (
    <div className="Logo" style={{height: props.height}} >
        {/* <img src={myLogo} alt="MyLogo" /> */}
        <img src={process.env.PUBLIC_URL + '/assets/MZ_logo1.png'} alt="MyLogo" />
    </div>
);

export default logo;