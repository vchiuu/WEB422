import React, { Component } from 'react';
import moment from 'moment';
import MainContainer from './MainContainer';

class Employees extends Component {
  constructor(props){
    super(props);
    this.dataSource = this.props.dataSource;
    this.state = {
      employees: []
    }
  }
  componentDidMount(){
    fetch(this.dataSource).then(res => res.json()).then((res)=> {
      this.setState({
        employees: res
      });
    }).catch((err) => {
      console.log("Error: Could not find employee data");
    });
  }
  render(){
    return (
      <MainContainer sidebar="Employees">
        <h1 className="page-header"> Employees </h1>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Name &amp; Position</th>
              <th>Address</th>
              <th>Phone Num</th>
              <th>Hire Date</th>
              <th>Salary Bonus</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((employee, index) => {
              return (
                <tr key={employee._id}>
                  <td>{employee.FirstName} {employee.LastName}</td>
                  <td>{employee.AddressStreet}, {employee.AddressCity} {employee.AddressStreet}</td>
                  <td>{employee.PhoneNum} ex: {employee.Extension}</td>
                  <td>{moment(employee.HireDate).format("LL")}</td>
                  <td>$ {parseFloat(employee.SalaryBonus)} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </MainContainer>
    )
  }
}

export default Employees;