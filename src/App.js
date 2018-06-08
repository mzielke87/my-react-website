import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import MyWebsite from './containers/MyWebsite/MyWebsite';
import Layout from './hoc/Layout/Layout';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
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

  routeChanged = (path) => {
    this.child.current.routeChanged(path);
  }

  render () {
    return (
      <div className="container">
        <Layout ref={this.child}>
          <MyWebsite navClicked={this.props.navClicked}/>
        </Layout>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);