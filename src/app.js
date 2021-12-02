import React from 'react';

import ToDo from './components/todo/todo.js';
import Layout from './components/layout.js';
import { ThemeContext } from './context/theme.js';
import { SettingsContext } from './context/site.js';

function App() {
  return (
    <div className='App'>
      <Layout/>
    </div>

  )
}

export default App;