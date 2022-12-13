import React, { Component } from 'react'

export default class Tabbar extends Component {
    state={list:[
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
    current:this.props.parentcurrent
    }

    render() {

        // this.state.current = this.props.parentcurrent

        // this.setState({
        //     current:this.props.parentcurrent
        // })
        return (
        <div>
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
        this.props.myevent(index)
    }
}
