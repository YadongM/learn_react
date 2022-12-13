import React, { Component } from 'react'


class Field extends Component{
    state={
        value:''
    }

    clear(){
        this.setState({
            value:''
        })
    }

    render(){
        return <div style={{background:"yellow"}}>
            <label>{this.props.label}</label>
            <input type={this.props.type} onChange={(evt)=>{
                this.setState({
                    value:evt.target.value
                })
            }}
            value={this.state.value}
            />
        </div>
    }
}




export default class App extends Component {
    username=React.createRef()
    password=React.createRef()

  render() {
    return (
      <div>
        <h1>Login Page</h1>

        <Field label='username' type='text' ref={this.username} />
        <Field label='password' type='text' ref={this.password} />


        <button onClick={()=>{
            console.log(this.username.current.state.value)
            console.log(this.password.current.state.value)
        }}>Login</button>


        <button onClick={()=>{
            this.username.current.clear()
            this.password.current.clear()
        }}>Cannel</button>

      </div>
    )
  }
}
