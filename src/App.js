import React, {Component} from 'react';
import MyWebsite from './containers/MyWebsite/MyWebsite';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <MyWebsite navClicked={this.props.navClicked}/>
        </Layout>
      </div>
    );
  }
}

export default App;