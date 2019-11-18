import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Overview from './Overview'
import Projects from './Projects'
import Employees from './Employees'
import Teams from './Teams'
import RouteNotFound from './RouteNotFound.js'

class App extends Component {
  render() {
    let dataSourceURL = "https://teams-api-data.herokuapp.com/";
    return (
      <Switch>
        <Route exact path="/" render={()=> (
          <Overview title="Overview" dataSource={dataSourceURL} />
        )}/>
        <Route exact path="/projects" render={()=>(
          <Projects title="Projects" dataSource={dataSourceURL + "projects"} />
        )}/>
        <Route exact path="/employees" render={()=>(
          <Employees title="Employees" dataSource={dataSourceURL + "employees"} />
        )}/>
        <Route exact path="/teams" render={()=>(
          <Teams title="Teams" dataSource={dataSourceURL + "teams"}/>
        )}/>
        <Route render={()=>(
          <RouteNotFound title="Not Found" />
        )}/>
      </Switch>
    );
  }
}

export default App;