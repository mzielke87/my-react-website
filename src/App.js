import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import Modal from 'react-modal';
import MyWebsite from './containers/MyWebsite/MyWebsite';
import Layout from './hoc/Layout/Layout';
import Footer from './components/Footer/Footer';
import './App.css';

import myProfile from './assets/cropped-profile.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
    this.state = {
      isPaneOpen: false
    };
  }

  componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      if(action !== null && action !== 'REPLACE'){
        this.routeChanged(location.pathname);   
      }      
    });
  }
  componentWillUnmount() {
      this.unlisten();
  }

  componentDidMount() {
    Modal.setAppElement(this.el);
  }

  routeChanged = (path) => {
    this.child.current.routeChanged(path);
  }

  logoClicked = () => {
    alert('clicked!');
  }

  render () {
    return (
      <div ref={ref => this.el = ref} className="container">
        <Layout ref={this.child} logoClicked={() => this.setState({isPaneOpen: true})}>
          <MyWebsite navClicked={this.props.navClicked}/>
        </Layout>
        <SlidingPane
          className='sliding-pane-container'
          overlayClassName='sliding-pane-overlay'
          isOpen={this.state.isPaneOpen}
          title='Matthew Zielke'
          from='left'
          onRequestClose={() => this.setState({isPaneOpen: false})}>
          <div className="my-profile-container">
            <h1 className="my-profile-title">Hello!</h1>
            <img className="my-profile" src={myProfile} alt="MyProfile"/>
          </div>
          <br/>
          <p>I am Software Engineer with experience in full stack web development.</p>
            <br/>
            <p>I enjoy learning and am always open to a project that will further my knowledge.</p>
            <br/>
            <p>Currently I am working as a Software Engineer at Buxton Co in Fort Worth, Texas.</p>
            <br/>          
        </SlidingPane>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);