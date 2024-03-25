import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom';
function FormEx() {
    const [un,setUn]=useState("");
    const [pass,setPass]=useState("");
    const [error,setError]=useState("false")
    const navigate=useNavigate()
    const check=(ins)=>
    {
        if(un==="admin" && pass==="admin")
        {
            
            navigate("/")
            console.log("Yes")
            

        }
        }
    
    const formHandler=(event)=>
    {
        if(un==="admin" && pass==="admin")
        {     
        const loginObj={
            name:un,
            pwd:pass
        }
        console.log(loginObj)
        
        }
        else{
            setError("true")
    }
    }
  return (
    <>
<h3>Login</h3>
<form onSubmit={formHandler}>
    Username:<input type="text" value={un} placeholder='Username' onChange={(e)=>setUn(e.target.value)}></input><br/>
    <div>{error && un.length===0?<label style={{color:'blue'}}>username required</label>:""}</div>
Password:<input type="password" value={pass} placeholder='password' onChange={(f)=>setPass(f.target.value)}></input><br/>

    <button type='submit' onClick={check}>Login</button>
</form>
    </>
  )
}
 export default FormEx;