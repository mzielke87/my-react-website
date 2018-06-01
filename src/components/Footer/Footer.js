import React from 'react';
import LinkedInLogo from '../../assets/In-2C-28px-R.png';
import GitHubLogo from '../../assets/GitHub-Mark-32px.png';
import Aux from '../../hoc/Auxx/Auxx';
import './Footer.css';

const logoPadding = {
    padding: '12px'
};

const Footer = () => (
    <Aux>        
        <div className="footer">
        <div className="footer-item">
                {/* <div className="footer-text">Follow my GitHub</div> */}
                <a href="https://github.com/mzielke87" target="_blank" rel="noopener noreferrer">
                    <img style={logoPadding} src={GitHubLogo} alt="Go to my GitHub Profile!" width="32" height="32" border="0"/>
                </a>
            </div>
            <div className="footer-item">
                <a className="footer-email" href='mailto:matthew@matthewzielke.com?' target="_top">Matthew@MatthewZielke.com</a>
            </div>
            <div className="footer-item">
                {/* <div className="footer-text">Connect with me</div> */}
                <a href="https://www.linkedin.com/in/matthew-zielke-a8a607128/" target="_blank" rel="noopener noreferrer">
                    <img style={logoPadding} src={LinkedInLogo} alt="Go to my LinkedIn Profile!" width="37" height="28" border="0"/>
                </a>
            </div>
        </div>
    </Aux>
)

export default Footer;