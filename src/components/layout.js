import React from 'react';

import { ThemeContext } from '../context/theme.js';
import ToDo from '../components/todo/todo.js';


class Layout extends React.Component {

  static contextType = ThemeContext;

  render() {

    console.log(this.context)

    const styles = {
      backgroundColor: this.context.mode === 'dark' ? 'grey' : 'salmon',
      opacity: '0.8',
    }

    return (
      <div style={styles}>
        <ToDo/>
      </div>

    )
  }
}

export default Layout;