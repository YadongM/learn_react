import React, { Component } from 'react'
import PropType from 'prop-types' 

export default class Navbar extends Component {
    static prototypes = {
        title: PropType.string,
        leftshow: PropType.bool
    }

    static defaultProps = {
        leftshow:true
    }

    state = {

    }

    render() {
        console.log(this.props)
        let {title, leftshow} = this.props
        return (
        <div>
            {leftshow && <button>Back</button>}
            navbar-{title}
            <button>Home</button>
        </div>
        )
    }
}

// Navbar.defaultProps = {
//     leftshow:true
// }




// class props
// Navbar.prototypes = {
//     title: PropType.string,
//     leftshow: PropType.bool
// }

// class Test {
//     a = 1
//     static a = 100
// }

// var obj = new Test();
// console.log(Test.a, obj.a)


