import React from "react"
import {Component} from "react"
import "../App.css"


class Employees extends Component {

    constructor(){
        super()

        this.state={
            employees: [],
            currentEmployee: null
        }
    }

    fetchEmployees=()=>{
        fetch("https://pursuit-veterinarian.herokuapp.com/api/employees")
        .then((res)=> res.json())
        .then((data)=>{
            this.setState({
                employees: data,
            });
        });
    }
    componentDidMount=()=>{
        this.fetchEmployees();
    };

    handleDropDownChange = (event) =>{
        this.setState({
            currentEmployee: event.target.value
        });
    }
    render() {

        let employeesDropDown = this.state.employees.map((employee)=>{
            return(
                <option>{employee.firstName}</option>
            )
        });

        let currentEmployeeObject = this.state.employees.find((employee)=>{
            return employee.firstName === this.state.currentEmployee
        });

        console.log(currentEmployeeObject)
 
     return (
        <div className="Employees"> 
            <h1>Employees page </h1>
            <select onChange={this.handleDropDownChange}>
                <option>Select an Employee</option>
                {employeesDropDown}
            </select>
            <div><h1>{currentEmployeeObject ? currentEmployeeObject.firstName: null} {currentEmployeeObject?.lastName}</h1></div>
        </div>
        )
    }
  }
  
  export default Employees;
  