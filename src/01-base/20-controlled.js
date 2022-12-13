import React, { Component } from 'react'

export default class App extends Component {



    state = {
      username:'test'
    }

    render() {
        return (
        <div>
            <h1>Login</h1>
            <input type='text' 
                   value={this.state.username}
                   onChange={(evt)=>{
                    console.log("onChange", evt.target.value)
                    this.setState({
                      username:evt.target.value
                    })
                  }}
                   >
            </input>

            <button onClick={()=>{
              console.log(this.state.username)
            }}>Login</button>

            <button onClick={()=>{
            }}>Reset</button>

        </div>
        )
    }
}
