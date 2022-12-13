import axios from 'axios'
import React, { Component } from 'react'
import './css/03-communication.css'

export default class App extends Component {

    constructor(){
        super()
        this.state={
            fileList:[],
            info:''

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
                    <FilmItem key={item.filmid} {...item}
                    onEvent={(value)=>{
                        this.setState({
                            info:value
                        })
                    }}
                    >
                        item
                    </FilmItem>)
            }
            <FilmDetail className='filmdetail'
                        info={this.state.info}>

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
            this.props.onEvent(synopsis)
        }}>
            <img src={poster} alt={name}/>
            <h4>name</h4>
            <div>Grade: {grade}</div>
        </div>
    }
}


class FilmDetail extends Component{
    render(){
        return <div className='filmdetail'>
            {this.props.info}
        </div>
    }
}