import { Outlet, Navigate} from "react-router-dom";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";


//havea aset state aht takes in the users information fro log in


export default function PrivateRoutes(){
  // let auth = {'token':false}
  let {user} = useContext(AuthContext);
  return(

    (user? <Outlet/>: <Navigate to='/login'/>)
  )



}