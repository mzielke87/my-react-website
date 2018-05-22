import React from 'react';
import LinkedInLogo from '../../assets/In-2C-28px-R.png';

const linkedInLogoPadding = {
    padding: '2px'
};

const Footer = () => (
    <Aux>
        <a href="https://www.linkedin.com/in/matthew-zielke-a8a607128/" target="_blank" rel="noopener noreferrer">
            <img style={linkedInLogoPadding} src={LinkedInLogo} alt="Go to my LinkedIn Profile!" width="37" height="28" border="0"/>
        </a>
    </Aux>
)

export default Footer;