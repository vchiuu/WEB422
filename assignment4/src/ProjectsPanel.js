import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class ProjectsPanel extends Component {
  constructor(){
    super();
    this.state = {
      projects:[]
    }
  }
  componentDidMount(){
    fetch("https://teams-api-data.herokuapp.com/projects").then(res => res.json()).then((res)=> {
      this.setState({
        projects: res
      });
    }).catch((err) => {
      console.log("Error: Could not find projects data");
    });
  }
  render(){
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title"> Projects </h3>
        </div>
      <div className="panel-body">
        <div className="table-responsive overview-table">
      <table className="table table-striped table-bordered">
        <tbody>
          {this.state.projects.map((project, index) => {
            return (
              <tr key={project._id}>
                <td>{project.ProjectName}</td>
                <td>Active {moment().diff(moment(project.ProjectStartDate), 'days')} Days</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
        <Link to="/projects" className="btn btn-primary form-control">View All Projects </Link>
      </div>
    </div>
    )
  }
}

export default ProjectsPanel;