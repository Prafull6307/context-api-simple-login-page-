
import React, { useContext, useState } from 'react'
import Usercontext from '../Usercontext';

function Login() {
  const[username,setUsername]=useState('')
  const[password,setPassword]=useState('')
    const {setUser}= useContext(Usercontext);
    function handlesubmit(e){
     e.stopPropagation();
  setUser({username,password});
     
   }
   
  return (
    <div>
     <input  type='text' placeholder='username' value={username} onChange={(e)=>{
         setUsername(e.target.value);
     }}/> {" "}
     <input type='text' placeholder='password' value={password} onChange={(e)=>{ setPassword(e.target.value)}} />
     {' '}
     <button onClick={handlesubmit}>submit</button>
    </div>
  )
}

export default Login