import React from 'react'
import { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { app } from '../Firebase/Firebase';
const auth =  getAuth(app)
function Signup() {
    const [email , setEmail] = useState("");
    const [password , setPassword] =useState("");
    
    const createUser = () => {
        createUserWithEmailAndPassword(auth , email , password).then((value)=>alert('success'));
    }

  return (
    <div className='signup-page'>
        <label> Email </label>
        <input onChange={e=>setEmail(e.target.value)} type="email" required placeholder='enter your email here'/>
        <label> Password </label>
        <input  onChange={e=>setPassword(e.target.value)} type="password" required placeholder='enter your password here'/>
        <button onClick={createUser}>SignUp</button>
    </div>
  )
}

export default Signup