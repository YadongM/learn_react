import React, { Component } from 'react'
import './css/02-seat.css'
import Movie from './ticket/movie'
import Cinema from './ticket/cinema'
import Profile from './ticket/profile'

export default class App extends Component {
    state = {
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
            {/* {this.state.current===0 && <Movie/>}
            {this.state.current===1 && <Cinema/>}
            {this.state.current===2 && <Profile/>} */}

            {this.which()}
            <ul>
                {
                    this.state.list.map((item, index)=>
                            <li key={item.id} 
                            className={this.state.current===index?'activate':'none'}
                            onClick={()=>this.handleClick(index)}>
                                {item.text}
                            </li>
                        )
                }
            </ul>
        </div>
        )
    }

    handleClick(index){
        console.log(index)

        this.setState(
            {
                current:index
            }
        )
    }
    }
