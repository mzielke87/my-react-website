import React from 'react';

// import LinkedInLogo from '../../../assets/In-2C-28px-R.png';
// import GitHubLogo from '../../../assets/GitHub-Mark-32px.png';

import './Contact.css';
import '../../../App.css';

const marginRight = {
    marginRight: '25px',
    padding: '12px'
};

const marginLeft = {
    marginLeft: '25px',
    padding: '12px'
};

const Contact = () => (
    <div className="App">
        <header className="App-header">
            <h1 className="App-title">Contact</h1>
        </header>
        <p className="App-sub-header"></p>
        <div className="contact-body">
            <div className='contact-card'>
                <div className="contact-card-body">
                    Please use the links below to contact me. Send me an email or check out my LinkedIn and send me a message there.
                </div>
            </div>
            <div className="contact-footer">
                <div className="contact-footer-border">
                    <a href="https://github.com/mzielke87" target="_blank" rel="noopener noreferrer">
                        {/* <img style={marginRight} src={GitHubLogo} alt="Go to my GitHub Profile!" width="32" height="32" border="0"/> */}
                        <img style={marginRight} src={process.env.PUBLIC_URL + '/assets/GitHub-Mark-32px.png'} alt="Go to my GitHub Profile!" width="32" height="32" border="0"/>
                    </a>
                </div>
                <div >
                    <a href="https://www.linkedin.com/in/matthew-zielke-a8a607128/" target="_blank" rel="noopener noreferrer">
                        {/* <img style={marginLeft} src={LinkedInLogo} alt="Go to my LinkedIn Profile!" width="37" height="28" border="0"/> */}
                        <img style={marginLeft} src={process.env.PUBLIC_URL + '/assets/In-2C-28px-R.png'} alt="Go to my LinkedIn Profile!" width="37" height="28" border="0"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
)

export default Contact;