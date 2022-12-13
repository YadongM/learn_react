import React, { Component } from 'react'
import Navbar from './Navbar'


export default class App extends Component {

    render() {
        var obj = {
            title: 'Test',
            leftshow: false
        }
        return (
        <div>
            <div>
                <h2>Index-1</h2>
                <Navbar title='index' leftshow = {false}/>
            </div>

            <div>
                <h2>Index-2</h2>
                <Navbar title='list' leftshow = {false}/>
            </div>

            <div>
                <h2>Index-3</h2>
                <Navbar title='shopping' leftshow = {true}/>
            </div>

            <Navbar title={obj.title} leftshow = {obj.leftshow}/>
            <Navbar {...obj}/>
            
        </div>
        )
    }
}

