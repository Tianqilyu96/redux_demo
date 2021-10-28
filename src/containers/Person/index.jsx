import React, { Component } from "react";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import { addPerson } from "../../redux/actions/person";


class Person extends Component {
  addPerson = () => {
    const name = this.nameInput.value;
    const age = this.ageInput.value;
    const person = { id: nanoid(), name, age };
    this.props.add(person);
    this.nameInput = "";
    this.ageInput = "";
  };

  render() {
    return (
      <div>
        <h2>Person Component</h2>
        <h2>Count is :{this.props.count}</h2>
        <input ref={(c) => (this.nameInput = c)} placeholder="type your name" />
        <input ref={(c) => (this.ageInput = c)} placeholder="type your age" />
        <button onClick={this.addPerson}>ADD</button>
        <ul>
          {this.props.person.map((el) => {
            return (
              <li key={el.id}>
                Name: {el.name}, Age: {el.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect((state) => ({ person: state.person, count: state.count }), {
  add: addPerson,
})(Person);
