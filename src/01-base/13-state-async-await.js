import React, { Component } from 'react'

export default class App extends Component {
  state = {
    count:1,
  }
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleAdd1}>Add 1</button>
        <button onClick={this.handleAdd2}>Add 1</button>
      </div>
    )
  }

  handleAdd1=()=>{
      this.setState({
        count:this.state.count+1
      })

      console.log(this.state.count)
      
      this.setState({
        count:this.state.count+1
      })

      console.log(this.state.count)

      this.setState({
        count:this.state.count+1
      })

      console.log(this.state.count)
  
  }

  handleAdd2=()=>{
    setTimeout(()=>{
    this.setState({
      count:this.state.count+1
    })

    console.log(this.state.count)
    
    this.setState({
      count:this.state.count+1
    })

    console.log(this.state.count)

    this.setState({
      count:this.state.count+1
    })

    console.log(this.state.count)

})}
}

/*
If setState in a synchronization logic, 
the state will update asynchronous
the real dom will update asynchronous.

If setState in a asynchronous logic,
the state will update synchronize
the real dom will update synchronous

The setState accept the second parameter 
or the second parametric callback function.
It will be triggered when state and dom have finished updating.
*/