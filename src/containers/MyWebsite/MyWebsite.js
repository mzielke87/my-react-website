import React from 'react';
import {Redirect} from 'react-router-dom';
import Toolbar from '../../components/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';

const MyWebsite = () => (
    <Aux>
        {/* redirects all traffic to home */}
        <Redirect from="/" to="/Home"/>

        <Toolbar />

        <Footer />
    </Aux>
)

export default MyWebsite;