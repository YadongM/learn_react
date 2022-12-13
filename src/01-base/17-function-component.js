import React, { Component } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* class */}
        <Navbar></Navbar>

        {/* function */}
        <Sidebar bg='red' position='right'></Sidebar>
      </div>
    )
  }
}
