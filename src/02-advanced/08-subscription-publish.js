import axios from 'axios'
import React, { Component } from 'react'
import './css/03-communication.css'

export default class App extends Component {

    constructor(){
        super()
        this.state={
            fileList:[],
        }

        axios.get('/test.json'.hen(res=>{
            console.log(res.data.data.film)
            this.setState({
                fileList:res.data.data.films
            })
        }))
    }

    render() {
        return (
        <div>

            {
                this.state.fileList.map(item=>
                    <FilmItem key={item.filmid} {...item}>
                    </FilmItem>)
            }

            <FilmDetail>

            </FilmDetail>
        </div>
        )
    }
}


class FilmItem extends Component{
    render(){
        console.log(this.props)

        let {name, poster, grade, synopsis} = this.props

        return <div className='filmitem' onClick={()=>{
            bus.publish(synopsis)
        }}>
            <img src={poster} alt={name}/>
            <h4>name</h4>
            <div>Grade: {grade}</div>
        </div>
    }
}

// subscripter
class FilmDetail extends Component{
    constructor(){
        super()
        this.state={
            info:''
        }
        bus.subscribe((info)=>{
            console.log("define in filmdeatil",info)

            this.setState({
                info:this.state.info
            })

        })
    }

    render(){
        return <div className='filmdetail'>
            {this.state.info}
        </div>
    }
}

var bus={
    list:[],
    // subscribe
    subscribe(callback){
        this.list.push(callback)

    },

    // publish
    publish(text){
        this.list.forEach(callback=>{
            callback && callback(text)
        })
    }
}