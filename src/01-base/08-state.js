import React, { Component } from 'react'

class APP extends Component{
    // state = {
    //     myText: "Like",
    //     myShow: true
    // }

    constructor(){
        super()
        this.state = {
            myText: "Like",
            myShow: true
    }
    }

    render() {
        return(
            <div>
                <h1>Welcome</h1>
                <button onClick={
                    ()=>{
                        this.setState({
                            myShow: !this.state.myShow
                        })

                        if (this.state.myShow){console.log("Like")}
                        else {console.log("Cannel")}
                }
            }> {this.state.myShow?"Like":"Cannel"} </button>
            </div>
        )
    }
}



export default APP