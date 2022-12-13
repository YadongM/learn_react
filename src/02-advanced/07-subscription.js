import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
        <div>
            07-subscription
        </div>
        )
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


bus.subscribe((text)=>{
    console.log('111', text)
})

bus.subscribe((text)=>{
    console.log('222', text)
})


setTimeout(()=>{
    bus.publish('Test1')
}, 0)

setTimeout(()=>{
    bus.publish('Test2')
}, 1000)


setTimeout(()=>{
    bus.publish('Test3')
}, 2000)