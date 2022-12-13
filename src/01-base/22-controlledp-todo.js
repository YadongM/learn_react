import React, { Component } from 'react'
import './css/01-index.css'


class App extends Component {
    state = {
            myText:'',
            list:[{
                id:1,
                myText:'aaa',
                ischecked:false
            },
            {
                id:2,
                myText:'bbb',
                ischecked:false
            },
            {
                id:3,
                myText:'ccc',
                ischecked:false
            }
        ]
        }

    render() {
    return (
        <div>

            <input value={this.state.myText}
                   onChange={(evt)=>{
                    this.setState({
                        myText:evt.target.value
                    })
                   }} />

            <button onClick={ 
                ()=>{this.handleClick()} 
                }>Add</button>
            
            <ul>
                {
                    this.state.list.map((item, index)=>
                        <li key={item.id}>

                        <input type='checkbox'
                               checked={item.ischecked}
                               onChange={()=>this.handleChecked(index)}
                        ></input>

                            {/* {item.myText} */}
                            {/* Richtext example */}
                            <span dangerouslySetInnerHTML=
                            {
                                {__html:item.myText}
                            }
                            style={{textDecoration: item.ischecked?'line-through':''}}
                            ></span>
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
        console.log("Click1", this.state.myText)

        // do not modify the state directly,
        // maybe cause the uncontrollable problem
        // this.state.list.push(this.myref.current.value)

        let newList=[...this.state.list]
        newList.push({
            id:Math.random()*10000,
            myText:this.state.myText,
            ischecked:false
        })

        this.setState({
            list: newList,
            myText:''
        })

        // clean the chatbox
        // this.setState({
        //     myText:''
        // })

    }

    handleDelClick(index) {
        console.log("DelClick1",index)

        let newList=this.state.list.concat()
        newList.splice(index, 1)

        this.setState({
            list: newList
        })
    }

    handleChecked = (index) =>{
        console.log(index)

        let newList = [...this.state.list]

        newList[index].ischecked = !newList[index].ischecked

        this.setState({
            list:newList
        })
    }
}

export default App


































