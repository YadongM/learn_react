import React, { Component } from 'react'
import BetterScroll from 'better-scroll'
export default class App extends Component {
  state={
    list:[]
  }
  render() {
    return (
      <div>
        <button onClick={()=>this.getData()}>click</button>
        <div className='content' style={
            {height:'200px', 
             background:'yellow',
             overflow:'hidden'}
            }>
            <ul className="content">
                {
                    this.state.list.map(item=>
                        <li key={item}>{item}</li>
                        )
                }
            </ul>
        </div>
        
      </div>
    )
  }
  getData(){
    var list = [1,2,3,4,5,6,7,7,8,9,99,7,54,32,123,543,756,678,234,235,57,86,45,63,54,234]

    this.setState({
        list:list
    },()=>{
        new BetterScroll(".content")
    })    
  }
}
