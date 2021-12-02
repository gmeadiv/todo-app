import React from "react";
import { PeopleContext } from "../../context/people.js";;

class People extends React.Component {

  static contextType = PeopleContext;

  // handlePerson() {
  //   let payload = {
  //     name: 'george',
  //     role: 'Student'
  //   }

  //   this.context.addPerson
  // }

  render() {
    return (
      <p>temp</p>
    )
  }

}

export default People;