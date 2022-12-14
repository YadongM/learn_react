import React, { useState } from 'react'

export default function App() {

    const [name,setName] = useState("Yadong")
    const [age,setAge] = useState("100")

    console.log()
    return (
        <div>
            
            <button onClick={()=>{
                setName("Mao")
                setAge("18")
            }}>click</button>

            {name}-{age}

        </div>
    )
}
