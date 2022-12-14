import React, { useCallback, useState } from 'react'

export default function App() {

    const [text, settext] = useState("aaa")
    const [list, setList] = useState(["aa", "bb"])
    
    const handleChange=useCallback(
        (evt)=>{
            settext(evt.target.value)
        },[]
    )

    const handleAdd=useCallback(
        ()=>{
            setList([...list,text])
            settext("")
        },[list, text]
    )

    const handleDel=useCallback(
        (index)=>{
            console.log(index)
            var newList = [...list]
            newList.splice(index,1)
            setList(newList)
        },[list]
    )

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
