import React, { Component } from 'react'
import MainContainer from './MainContainer'

class RouteNotFound extends Component {
  render() {
    return (
      <div>
        <MainContainer>
          <h1 className="page-header"> Page Not Found </h1>
          Sorry the page you are looking for seems to be missing!
        </MainContainer>
      </div>
    )
  }
}
export default RouteNotFound