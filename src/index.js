import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './app.js';
import Theme from './context/theme';
import SettingsProvider from './context/site.js';
import reportWebVitals from './reportWebVitals.js';

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
