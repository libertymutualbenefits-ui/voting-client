import React, {Component} from 'react';
import mount from './PetListContainer';

import '../../base.css';

export class PetList extends Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.savePet = this.savePet.bind(this);
  }

  render() {
    var pets = this.props.pet.pets;
    var petsList =  pets.map(function(name, index){
                      return <li key={ index }>{name}</li>;
                    });
    return(
      <div>
        <h2>{"List of pets"}</h2>
        <ul>{petsList}</ul>
        <input onChange={this.handleChange}></input>
        <button onClick={this.savePet}>Submit Pet</button>
      </div>
    );
  }

  savePet(event){
    this.props.savePet();
  }

  handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const payload = {
      name,
      value
    };
    this.props.handleChange(payload);
  }
};

export default mount(PetList);
