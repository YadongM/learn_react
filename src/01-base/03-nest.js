import React, {Component }from 'react'

class Child extends Component{
    render() {
        return <div> Child of Navbar</div>
    }
}

class Navbar extends Component{
    render() {
        return <div>
            Navbar
            <Child/>
            </div>
    }

}

function Swiper() {
    return <div>Swiper</div>
}

const Tabbar = () =>  <div> Tabbar</div>


class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>

        <Swiper></Swiper>
        <Tabbar></Tabbar>

      </div>
    )
  }
}

export default App
