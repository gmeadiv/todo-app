import React, { useState } from "react";

export const PeopleContext = React.createContext();

function PeopleProvider( {children} ) {

  let [currentPerson, setCurrentPerson] = useState({});
  let [people, setPeople] = useState([]);

  const values = {
    currentPerson,
    people,
    setCurrentPerson: ({name, role}) => {
      if (!name || !role) {
        throw new Error('invalid person')
      } else {
        setCurrentPerson({name, role});
      }
    },
    addPerson: ({name, role}) => {
      if (!name || !role) {
        throw new Error('invalid person')
      } else {
        setPeople([...people, {name, role}]);
      }
    }
  }

  return (
    <PeopleContext.Provider value={values} >
      {children}
    </PeopleContext.Provider>
  )
}

export default PeopleProvider;