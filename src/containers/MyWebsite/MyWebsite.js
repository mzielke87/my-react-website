import React from 'react';
import {Redirect} from 'react-router-dom';
import Toolbar from '../../components/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';

const MyWebsite = () => (
    <div>
        {/* redirects all traffic to home */}
        <Redirect from="/" to="/Home"/>

        <Toolbar />

        <Footer />
    </div>
)

export default MyWebsite;