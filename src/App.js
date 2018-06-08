import React, {Component} from 'react';
import MyWebsite from './containers/MyWebsite/MyWebsite';
import Layout from './hoc/Layout/Layout';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="container">
        <Layout>
          <MyWebsite navClicked={this.props.navClicked}/>
        </Layout>
        <Footer />
      </div>
    );
  }
}

export default App;