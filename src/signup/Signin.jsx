import React, { useState } from 'react'
import { getAuth , signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../Firebase/Firebase';
const auth = getAuth(app);
function Signin() {
    const [email , setEmail] = useState("");
    const [password ,setPassword] = useState("")
    
    const signinuser = () => {
        signInWithEmailAndPassword(auth , email , password)
        .then((value)=>console.log("sucess"))
        .catch((err)=>console.log(err));
    }
    
  return (
    <div className='signin-page'>
        <label>Enter your email</label>
        <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" placeholder='enter your email here'  />
        <label>Enter your password</label>
        <input onChange={(e)=> setPassword(e.target.value)} value={password} type="password" placeholder='enter your password here'  />
        <button onClick={signinuser}>Sign In Me In</button>
    </div>
  )
}

export default Signin;