import React, { useState } from 'react'

export default function App() {

    const [text, settext] = useState("aaa")
    const [list, setList] = useState(["aa", "bb"])
    
    const handleChange=(evt)=>{
        settext(evt.target.value)
    }

    const handleAdd=()=>{
        setList([...list,text])
        settext("")
    }

    const handleDel=(index)=>{
        console.log(index)
        var newList = [...list]
        newList.splice(index,1)
        setList(newList)

    }

    return (
        <div>
        <input onChange={(evt)=>{
            handleChange(evt)
        }} value={text}></input>

        <button onClick={()=>{
            handleAdd()
        }} >add</button>

        <ul>
            {
                list.map((item, index)=>
                    <li>
                        {item} 
                        <button onClick={()=>{handleDel(index)}}>
                            del
                        </button> 
                    
                    </li>
                    
                    )
            }
        </ul>

            {!list.length && "Test"}
        </div>

        
    )
}
