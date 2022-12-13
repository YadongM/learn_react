import React, { Component } from 'react'

class Navbar extends Component{
    render (){
        return <div style={{background:'yellow'}}>
            <button onClick={()=>{
                console.log('child send root',this.props.event)
                this.props.event()
                }}>click</button>
            <span>Navbar</span>
        </div>
    }
}

class Sidebar extends Component{
    render (){
        return <div style={{background:'red',
                            width:'200px'}
                    }>
            <ul>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
            </ul>
        </div>
    }
}


export default class App extends Component {
    state={
        isShow:true
    }

    handleEvent=()=>{
        this.setState({
            isShow:!this.state.isShow
        })
    }
    render() {
        return (
        <div>
            
            <Navbar event={this.handleEvent}/>
            <button onClick={()=>{
                this.setState({
                    isShow:!this.state.isShow
                })
            }}>click</button>
            {this.state.isShow && <Sidebar/>}
        </div>
        )
    }
}



/*
root2child: through porps
child2root: though callback function
*/