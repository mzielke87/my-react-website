import React from 'react';

import './Contact.css';
import '../../../App.css';
import myProfile from '../../../assets/profilecircle.png';

const Contact = () => (
    <div className="App">
        <header className="App-header">
            <h1 className="App-title">Contact</h1>
        </header>
        <p className="App-sub-header"></p>
        <div className="App-body">
            <div className='contact-card'>
                <div className="contact-profile-pic-container">
                    <img className="contact-profile-pic" src={myProfile} alt="myProfile" />
                </div>
                <div className="contact-card-body">
                    Please use the links below to contact me. Send me an email or check out my LinkedIn and send me a message there.
                </div>
            </div>
        </div>
    </div>
)

export default Contact;