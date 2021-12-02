import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './app.js';
import Theme from './context/theme';
import Settings from './context/site';
import reportWebVitals from './reportWebVitals.js';

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <Settings>
        <App />
      </Settings>
    </Theme>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
