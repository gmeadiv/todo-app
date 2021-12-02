import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function Settings({children}) {

  let [pagination, setPagination] = useState(3);
  let [sort, setSort] = useState('difficulty');
  let [hide, setHide] = useState(false);

  const values = {
    pagination: 3,
    sort: 'difficulty',
    hide: false
  }

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
}

export default Settings;