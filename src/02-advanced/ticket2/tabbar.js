import React from 'react'

// export default class Tabbar extends Component {
//     // state={
//     //     list:[
//     //     {
//     //         id:1,
//     //         text:"Movie"
//     //     },
//     //     {
//     //         id:2,
//     //         text:"Cinema"
//     //     },
//     //     {
//     //         id:3,
//     //         text:"Profile"
//     //     }
//     // ],
//     // current:this.props.parentcurrent
//     // }

//     render() {

//         // this.state.current = this.props.parentcurrent

//         // this.setState({
//         //     current:this.props.parentcurrent
//         // })
//         return (
//         <div>
//             <ul>
//                     {
//                         this.props.list.map((item, index)=>
//                                 <li key={item.id} 
//                                 className={this.props.current===index?'activate':'none'}
//                                 onClick={()=>this.handleClick(index)}>
//                                     {item.text}
//                                 </li>
//                             )
//                     }
//                 </ul>
//         </div>
//         )
//     }
//     handleClick(index){
//         console.log(index)

//         this.setState(
//             {
//                 current:index
//             }
//         )
//         this.props.myevent(index)
//     }
// }

const Tabbar = (props)=>{
    return (
        <div>
            <ul>
                    {
                        props.list.map((item, index)=>
                                <li key={item.id} 
                                className={props.current===index?'activate':'none'}
                                onClick={()=>props.myevent(index)}>
                                    {item.text}
                                </li>
                            )
                    }
                </ul>
        </div>
        )
}

export default Tabbar