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
      return (
        <div className="Pets">
            <h1>
            Pets page
            </h1>
        </div>
      )
    }

}
  
  export default Pets;
  