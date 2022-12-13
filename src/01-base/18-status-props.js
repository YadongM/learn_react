import React, { Component } from 'react'

class Child extends Component{
    render () {
        return <div>
            child-{this.props.text}

            <button onClick={
                ()=>{this.props.text = "333333"}}>
                click-sub
            </button>
        </div>
    }
}



export default class App extends Component {

    state = {
        text:"1111"
    }
  render() {
    return (
      <div>
        <button onClick={()=>{this.setState({text:"22222"})}}>
            click-Root
        </button>
        <Child text = {this.state.text}/>
      </div>
    )
  }
}
