import React, {Component} from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';
import Aux from '../Auxx/Auxx';
import './Layout.css';

class Layout extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentNav: 'none'
        }
    }
    
    navClicked = (page) => {
        this.setState({
            currentNav: page
        });
    };

    render () {
        const main = this.state.navClicked ? null : <main>{this.props.children}</main>;

        return (
            <Aux>
                <Toolbar linkClicked={this.navClicked} currentNav={this.state.currentNav}/>

                {/* <main>{this.props.children}</main> */}
                <main>{React.cloneElement(this.props.children, { currentNav: this.state.currentNav })}</main>
                
                <Footer />
            </Aux>
        );
    }
}

export default Layout;