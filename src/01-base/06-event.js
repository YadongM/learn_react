import React, { Component } from 'react'

class App extends Component {
  a = 100
  render() {
    return (
      <div>
        <input />
        <button onClick={
            ()=>
            console.log("log", this.a)
        } >Add</button> {/* good */}

        <button onClick={this.handleClick2.bind(this)} >Add</button> {/* bad */}
        <button onClick={this.handleClick3} >Add</button> {/* good */}
        <button onClick={()=>{this.handleClick4()}} >Add</button> {/* Very good, good to pass parameters*/}
      </div>
    )
  }

  handleClick2(){
    console.log("click2", this.a)
  }

  handleClick3 = (evt)=>{
    console.log("click3", this.a, evt.target)
  }

  handleClick4 = ()=>{
    console.log("click4", this.a)
  }
}

export default App