import React, { Component } from 'react'
import MainContainer from './MainContainer'

class Teams extends Component {
  constructor(props){
    super(props);
    this.dataSource = this.props.dataSource;
    this.state = {
      teams: []
    }
  }
  componentDidMount(){
    fetch(this.dataSource).then(res => res.json()).then((res)=> {
      this.setState({
        teams: res
      });
    }).catch((err) => {
      console.log("Error: Could not find team data");
    });
  }
  render(){
    return (
      <MainContainer sidebar="Teams">
        <h1 className="page-header"> Teams </h1>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
          {this.state.teams.map((team, index) => {
            return (
              <tr key={team._id}>
                <td>{team.TeamName}</td>
                <td>{team.Projects.map((project, index)=>{
                  return (
                    <li key={index}>{project.ProjectName}</li>
                  )
                })}</td>
                <td>{team.Employees.length} Employees</td>
                <td>{team.TeamLead.FirstName} {team.TeamLead.LastName}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </MainContainer>
    )
  }
}
export default Teams;