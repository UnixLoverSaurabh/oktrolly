import React, { Component } from 'react';
import './hoc/Layout/Layout'
import Layout from './hoc/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import Authentication from './containers/Authentication/Authentication';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout>
            <Authentication />
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;