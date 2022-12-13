import React, { Component } from 'react'
import './css/01-index.css'

class App extends Component {
  render() {
    var myname = "Yadong";

    var obj = {
        background: "yellow",
        fontSize: "30px"
    }

    return (
      <div>
        {"Hello " + myname}

        <div style={obj}>As a test</div>
        <div style={{background: "red"}}> As a test</div>

        <div className="active">As a test2</div>
        <div id="myapp">As a test3</div>

        <label for="username">User name: </label>
        <input type="text" id="username"></input>

      </div>
    )
  }
}

export default App