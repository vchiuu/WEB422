import React, { Component } from 'react'
import moment from 'moment'
import MainContainer from './MainContainer'

class Projects extends Component {
  constructor(props){
    super(props);
    this.dataSource = this.props.dataSource;
    this.state = {
      projects: []
    }
  }
  componentDidMount(){
    fetch("https://teams-api-data.herokuapp.com/projects").then(res => res.json()).then((res)=> {
      this.setState({
        projects: res
      });
    }).catch((err) => {
      console.log("Error: Could not find project data");
    });
  }
  render(){
    return (
      <MainContainer sidebar="Projects">
        <h1 className="page-header"> Projects </h1>
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
          {this.state.projects.map((project, index) => {
            let endDate ="";
            if (project.ProjectEndDate === null){
              endDate = "N/A";
            } else {
              endDate = moment(project.ProjectEndDate).format('LL');
            }
            return (
              <tr key={project._id}>
                <td>{project.ProjectName}</td>
                <td>{project.ProjectDescription}</td>
                <td>{moment(project.ProjectStartDate).format('LL')}</td>
                <td>{endDate}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </MainContainer>
    )
  }
}
export default Projects;