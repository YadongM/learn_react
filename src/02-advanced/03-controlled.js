import React, { Component } from 'react'
import './css/02-seat.css'
import Movie from './ticket2/movie'
import Cinema from './ticket2/cinema'
import Profile from './ticket2/profile'
import Tabbar from './ticket2/tabbar'
import Navbar from './ticket2/navbar'

export default class App extends Component {
    state={
        list:[
        {
            id:1,
            text:"Movie"
        },
        {
            id:2,
            text:"Cinema"
        },
        {
            id:3,
            text:"Profile"
        }
    ],
        current:0
    }

    which(){
        switch (this.state.current){
            case 0:
                return <Movie></Movie>
            case 1:
                return <Cinema></Cinema>
            case 2:
                return <Profile></Profile>
            default:
                return null
        }   
    }

    render() {
        return (
        <div>
            <Navbar myevent={()=>{
                console.log('navbar-','Tell tabbar to change to center')
                this.setState({
                    current:2
                })
            }}></Navbar>
            {/* {this.state.current===0 && <Movie/>}
            {this.state.current===1 && <Cinema/>}
            {this.state.current===2 && <Profile/>} */}

            {this.which()}
            <Tabbar 
            myevent={
                (index)=>{
                    console.log("From the root", index)
                    this.setState({
                        current:index
                    })
                }
            } 
            current={this.state.current}
            list={this.state.list}    >

            </Tabbar>
        </div>
        )
    }
    }
