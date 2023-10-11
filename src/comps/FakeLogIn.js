import React, {useContext}from "react";
import { AuthContext } from "../contexts/AuthContext.js";

export default function FakeLogIn(){

  const log  = useContext(AuthContext)
  return(
    <div>

      <form onSubmit={log.contextData.logInUser}>
        <p>erererere</p>
        <input type="text" name="username" placeholder="username"></input>    
        <input type="password]" name="password" placeholder="password"></input>      
        <input type="submit"></input>   
        </form>
    </div>
  )

}

