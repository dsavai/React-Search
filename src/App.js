import React, { Component } from 'react'
import Header from './Header.js'
import Filter from './Filter.js'
export default class App extends Component {
  render() {
    return (
      <div id="main">
        <div className="container">
          <Header />
          <Filter />
        </div>
      </div>
    )
  }
}



