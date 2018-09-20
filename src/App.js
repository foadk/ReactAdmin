import React, { Component, Fragment } from 'react';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';

import Layout from './Layout/Layout';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Layout />
        <Alert stack={{ limit: 10 }} />
      </Fragment>
    );
  }
}

export default App;
