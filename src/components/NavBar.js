import React from "react"
import {Component} from "react"
import "../App.css"
import {Link} from "react-router-dom"


class NavBar extends Component {
    render() {
      return (
      <div className="NavBar">
        <Link to="/"> 
        <img 
        className="pet-logo"
        src="https://i.pinimg.com/originals/af/fb/c9/affbc96be98edecba473e0e630069b3b.png"
        alt="Pet logo"/>
        </Link>
        <Link to="/pets">Pets </Link>
        <Link to="/employees"> Employees</Link>
      </div>)
    }
  }
  
  export default NavBar;
  