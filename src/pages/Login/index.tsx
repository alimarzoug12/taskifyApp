import React from 'react'

export function Login():JSX.Element {
    
    const [userName,setUserName]=React.useState<string>("")
    const [password,setPassword]=React.useState<string>("")

   function onclickLoginHandleEvent(userName:string,password:string)
   {  
    if(userName === "ali" && password==="123")
    console.log("bonjour")
    
    else console.log("salut")
}

  return (
        <div  style={{gap:"30px"}}>
    <h1>Login </h1>
    <div className="d-felx">
        <span>Nom :  </span>
    <input type="text" placeholder='userName' value={userName} name="nom"
     onChange={(event)=>setUserName(event.target.value)}/>
    </div>
    <div className='d-felx'>
        <span>Mot de passe : </span>  
    <input type="password" placeholder='password' name="password" pattern="8" 
    value={password} onChange={(event)=>setPassword(event.target.value)}/>
    </div>
    <button type="submit" onClick={()=>{onclickLoginHandleEvent(userName,password)}}> valider</button>
</div>
  
  )
}

