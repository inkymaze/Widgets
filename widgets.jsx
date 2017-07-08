import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './frontend/clock.jsx';
import Weather from './frontend/weather.jsx';

class Root extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
        <Clock />
        <Weather/>
      </div>

    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render( <Root />, document.getElementById('root'));
});
