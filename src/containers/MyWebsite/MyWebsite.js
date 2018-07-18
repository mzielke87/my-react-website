import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
// import Toolbar from '../../components/Toolbar/Toolbar';
// import Footer from '../../components/Footer/Footer';
import {Route} from 'react-router-dom';
import Home from '../../components/Toolbar/Home/Home';
import Work from '../../components/Toolbar/Work/Work';
import Projects from '../../components/Toolbar/Projects/Projects';
import Blog from '../../components/Toolbar/Blog/Blog';
import Aux from '../../hoc/Auxx/Auxx';
import './MyWebsite.css';

class MyWebsite extends Component {
    render () {
        return (
            <Aux>
                {/* redirects all traffic to home page*/}
                {this.props.currentNav !== 'none' ? null : <Redirect from="/" to="/Home"/>}

                <div>
                    <Route path="/Home" component={Home}/>
                    {/* <Route path="/Work" component={Work}/> */}
                    <Route path="/Projects" component={Projects}/>
                    <Route path="/Blog" component={Blog}/>
                </div>
            </Aux>
        );
    }
}

export default MyWebsite;