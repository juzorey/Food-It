import React,{useContext} from "react";
import { Link } from "react-router-dom";
import {AuthContext} from "../contexts/AuthContext.js";

export default function Headers(){

  const data = useContext(AuthContext);


  return (
    <div>
      <Link to='/fake'>FakeHome</Link>
      {data.contextData.user?
      (<p onClick={data.contextData.logOutUser}>Logout</p>):(<Link to="flogin">FakeHome</Link>
      )}

      {data.contextData.user &&<p>hello {data.contextData.user.username}</p>}
      
    </div>
  )
}