import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <input />
        <button onClick={
            ()=>
            console.log("log")
        } >Add</button>

        <button onClick={this.handleClick2} >Add</button>
        <button onClick={this.handleClick3} >Add</button>
        <button onClick={()=>{
            this.handleClick4()
        }} >Add</button>
      </div>
    )
  }

  handleClick(){
    console.log("click")
  }

  handleClick2(){
    console.log("click2")
  }

  handleClick3 = ()=>{
    console.log("click3")
  }

  handleClick4 = ()=>{
    console.log("click4")
  }
}

export default App