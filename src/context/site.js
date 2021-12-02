import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function Settings(props) {

  console.log(props, '<-- props --<<')

  let [state, setState] = useState({
    title: 'my website',
    twitter: '@gmeadiv'
  })

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default Settings;