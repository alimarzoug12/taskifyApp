import React from 'react'
import { useNavigate } from "react-router-dom";

export function Login():JSX.Element {
    
    const [userName,setUserName]=React.useState<string>("")
    const [password,setPassword]=React.useState<string>("")

    const navigate = useNavigate();
   function onclickLoginHandleEvent(userName:string,password:string)
   {  
    if(userName === "ali" && password==="123")
    console.log("bonjour") 
    else console.log("salut")
    navigate("/profile")
    }

  return (
        <div  style={{gap:"30px"}}>
    <h1>Login </h1>
    <div className="lgn">
    <div className="d-flex">
        <span>Nom  </span></div><div>
    <input type="text" className="input" placeholder='User Name' value={userName} name="nom"
     onChange={(event)=>setUserName(event.target.value)}/>
    </div>
    <div className='d-flex'>
        <span>Mot de passe </span> </div><div> 
    <input type="password" className="input" placeholder='Password' name="password" pattern="8" 
    value={password} onChange={(event)=>setPassword(event.target.value)}/>
    </div></div>
    <button type="submit" className="button" onClick={()=>{onclickLoginHandleEvent(userName,password)}}>Valider</button>
</div>
  
  )
}

