import React from 'react';

export const ThemeContext = React.createContext();

class Theme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'dark',
      fontSize: '12px',
    }
  }
  render() {

    console.log(this.props, '<-- this dot props')
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default Theme;