import React from "react"
import {Component} from "react"
import "../App.css"


class Pets extends Component {
    constructor(){
        super()

        this.state={
            pets: []
        }
    }

    fetchPets=()=>{
        fetch("https://pursuit-veterinarian.herokuapp.com/api/pets")
        .then((res)=> res.json())
        .then((data)=>{
            this.setState({
                pets: data
            });
        });
    }
    componentDidMount=()=>{
        this.fetchPets()
    }

    render() {

    let petstoDisplay = this.state.pets.map((pet)=>{
        return (
            <div className="pet-card">
                <h2>Name: {pet.name} </h2>
                <h3>Species: {pet.kind} </h3>
                <h3>Breed: {pet.breed} </h3>
            </div>
        )
    })
      return (
        <div className="Pets">
            <h1>
            Pets Page
            </h1>
            <div id="pets-container">{petstoDisplay}</div>
        </div>
      )
    }

}
  
  export default Pets;
  