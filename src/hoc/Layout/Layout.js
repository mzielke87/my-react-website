import React, {Component} from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
// import Footer from '../../components/Footer/Footer';
import Aux from '../Auxx/Auxx';
import './Layout.css';

import Headroom from 'react-headroom';

let navClicked = false;
class Layout extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentNav: 'none'
        }
    }
    
    navClicked = (page) => {
        navClicked = true;
        this.setState({
            currentNav: page
        });
        window.scrollTo(0, 0);
    };

    routeChanged (path) {
        if(!navClicked){
            this.setState({
                currentNav: path.slice(1).toLowerCase()
            });
        }        
        navClicked = false;        
    }

    render () {
        const main = this.state.navClicked ? null : <main>{this.props.children}</main>;

        return (
            <Aux>
                <Headroom>
                    <Toolbar linkClicked={this.navClicked} currentNav={this.state.currentNav}/>
                </Headroom>

                <main>{React.cloneElement(this.props.children, { currentNav: this.state.currentNav })}</main>

                {/* <Footer /> */}
            </Aux>
        );
    }
}

export default Layout;