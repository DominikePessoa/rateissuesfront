require('normalize.css');
require('styles/App.scss');

import React from 'react';
import Hello from 'components/atoms/hello/Hello';

class AppComponent extends React.Component {
  render() {
    return (
      <div className='app'>
        <div className='notice'>Please edit <code>src/components/App.js</code> to get started!</div>
        <Hello />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
