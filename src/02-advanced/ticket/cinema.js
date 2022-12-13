import axios from 'axios'
import React, { Component } from 'react'

export default class Cinema extends Component {
    constructor(){
        super()
        this.state={
            cinemaList:[],
            bakcinemaList:[]
        }

        axios({
            url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=6798508",
            method:"get",
            headers:{
                'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"1670595670403344673734657","bc":"110100"}',
                'X-Host': "mall.film-ticket.cinema.list"
            }
        }).then(res=>{
            console.log(res.data.data.cinemas)

            this.setState({
                cinemaList:res.data.data.cinemas,
                bakcinemaList:res.data.data.cinemas
            })
        })
    }

    render() {
        return (
        <div>
                <input onInput={(event)=>this.handleInput(event)}/>
                {
                    
                    this.state.cinemaList.map(item=>
                        <dl key={item.cinemaid}>
                            <dt >{item.name}</dt>
                            <dd>{item.address}</dd>
                        </dl>
                        )
                }
        </div>
        )
    }
    handleInput= (event)=>{
        console.log("111",event.target.value)

        var newList = this.state.bakcinemaList.filter(item=>item.name.toUpperCase().includes(event.target.value.toUpperCase()))
        
        this.setState({
            cinemaList:newList
        })



    }
}


/*
    filter
*/
