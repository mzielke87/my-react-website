import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
// import Toolbar from '../../components/Toolbar/Toolbar';
// import Footer from '../../components/Footer/Footer';
import Aux from '../../hoc/Auxx/Auxx';

class MyWebsite extends Component {
    render () {
        return (
            <Aux>
                {/* redirects all traffic to home page*/}

                {this.props.navClicked ? null : <Redirect from="/" to="/Home"/>}

                {/* <Toolbar />

                <Footer /> */}
            </Aux>
        );
    }
}

export default MyWebsite;