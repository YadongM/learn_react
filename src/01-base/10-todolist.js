import React, { Component } from 'react'
import './css/01-index.css'


class App extends Component {
    myref = React.createRef()
    state = {
            list:[{
                id:1,
                myText:'aaa'
            },
            {
                id:2,
                myText:'bbb'
            },
            {
                id:3,
                myText:'ccc'
            }
        ]
        }

    render() {
    return (
        <div>
            <input ref={this.myref} />
            <button onClick={ 
                ()=>{this.handleClick()} 
                }>Add</button>
            
            <ul>
                {
                    this.state.list.map((item, index)=>
                        <li key={item.id}>
                            {/* {item.myText} */}
                            {/* Richtext example */}
                            <span dangerouslySetInnerHTML=
                            {
                                {__html:item.myText}
                            }></span>
                            <button onClick={()=>{this.handleDelClick(index)}}>del</button>
                        </li>
                        )
                }
            </ul>
            
            {/* Add more reminer */}
            {/* {this.state.list.length===0? <div> There is nothing </div>:null } */}
            {/* {this.state.list.length===0 && <div> There is nothing </div> } */}
            
            <div className={this.state.list.length===0?'':'hidden'}>There is nothing</div>

        </div>
    )}

    handleClick() {
        console.log("Click1", this.myref.current.value)

        // do not modify the state directly,
        // maybe cause the uncontrollable problem
        // this.state.list.push(this.myref.current.value)

        let newList=[...this.state.list]
        newList.push({
            id:Math.random()*10000,
            myText:this.myref.current.value
        })

        this.setState({
            list: newList
        })

        // clean the chatbox
        this.myref.current.value=''

    }

    handleDelClick(index) {
        console.log("DelClick1",index)

        let newList=this.state.list.concat()
        newList.splice(index, 1)

        this.setState({
            list: newList
        })



    }
}

export default App


































