import React from 'react'

export function Login() {
  return (
    <form>
    Login : <br/>
    <label>Nom :  
    <input type="text" placeholder='user name'/>
    </label><br/>
    <label>Mot de passe :  
    <input type="password" placeholder='password'/>
    </label><br/>
    <input type="submit" value="Envoyer"></input>
    
    </form>
  )
}

