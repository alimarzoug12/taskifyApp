import React from "react"

import {Login} from "../Login"

export function Register ():JSX.Element{
    const [firstName,setFirstName]=React.useState<string>("")
    const [lastName,setLastName]=React.useState<string>("")
    const [password,setPassword]=React.useState<string>("")
    const [confPassword,setConfPassword]=React.useState<string>("")
    const [email,setEmail]=React.useState<string>("")
    const [error ,setError]=React.useState<boolean>(false)

    function onclickRegisterHandleEvent(firstName:string,lastName:string,email:string,password:string)
   {

   }
   
   function confpss () :boolean {
    if (password!==confPassword) {
        setError(true) }
    
     return error 
        
   }


    return (
        <div style={{gap:"10px"}}>

           <div>
            <span>First Name </span>
            <input type="text" placeholder="First Name" required value={firstName} 
            onChange={(event)=>setFirstName(event.target.value)}/>
            </div> 

            <div>
            <span>Last Name </span>
            <input type="text" placeholder="Last Name" required value={lastName} 
            onChange={(event)=>setLastName(event.target.value)}/>
            </div>

            <div>
            <span>Email </span>
            <input type="email" placeholder="Email" required value={email} 
            onChange={(event)=>setEmail(event.target.value)}/>
            </div>

            <div>
            <span>Password </span>
            <input type="password" placeholder="........" required minLength={8} value={password}
             onChange={(event)=>setPassword(event.target.value)}/>
            </div>

            <div>
            <span>Confirm Password </span>
            <input type="password" placeholder="........" required minLength={8}  value={confPassword}
             onChange={(event)=>setConfPassword(event.target.value)}/>
            </div>

            <input type="checkbox" value="I have read and agree to the terms" />
            <button type="submit" onClick={()=>{onclickRegisterHandleEvent(firstName,lastName,email,password)}}>Register</button> 
           
        </div>
    )
}