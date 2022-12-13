import React, { Component } from 'react'

export default class App extends Component {
    myusername = React.createRef()

    render() {
        return (
        <div>
            <h1>Login</h1>
            <input type='text' 
                   ref = {this.myusername}
                   defaultValue='test'>
            </input>

            <button onClick={()=>{
                console.log(this.myusername.current.value)
            }}>
                Login
            </button>
            <button onClick={()=>{
                this.myusername.current.value=""
            }}>Reset</button>

        </div>
        )
    }
}
