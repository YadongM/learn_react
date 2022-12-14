import React, {useEffect, useState} from 'react'

export default function App() {
    const [name, setname] = useState('test')

    useEffect(()=>{
        setname(name.substring(0,1).toUpperCase()+name.substring(1))
    },[name])


  return (
    <div>
        {name}

        <button onClick={()=>{
            setname('test2')
        }}>click</button>
    </div>
  )
}
