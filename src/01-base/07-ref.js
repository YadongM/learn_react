import React, { Component } from 'react'



class App extends Component {
  myref = React.createRef()
  render() {

    return (
      <div>
        {/* <input ref="mytext" /> */}
        <input ref={this.myref} />
        <button onClick={ ()=>{
            // console.log("Click1", this.refs.mytext.value)
            console.log("Click1", this.myref.current.value)
        } }>Add</button> {/* good */}

      </div>
    )
  }
}

export default App
