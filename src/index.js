import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './app.js';
import SettingsProvider from './context/site.js';

class Main extends React.Component {
  render() {
    return (
      <SettingsProvider>
        <App />
      </SettingsProvider>
    )
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
