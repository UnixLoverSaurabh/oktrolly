import React, { Component } from 'react';
import './components/Layout/Layout'
import Layout from './components/Layout/Layout';
import Authentication from './containers/Authentication/Authentication';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Authentication />
        </Layout>
      </div>
    );
  }
}

export default App;