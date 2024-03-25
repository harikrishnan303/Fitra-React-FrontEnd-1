import React, { useEffect, useState } from 'react'

function HooksEx() {
 const [count,setCount]=useState(0)  
 useEffect(
    ()=>
    {
        document.title="Theri";
        console.log({count})
    }
 )
 
 return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>{setCount(count+1)}}>inc 1</button>
    <button onClick={()=>{setCount(count-1)}}>dec 1</button>
    <button onClick={()=>{setCount(count+5)}}>inc 5</button>
    
    </>
  )
}

export default HooksEx