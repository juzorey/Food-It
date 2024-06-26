
import { Link } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
export default function Nav(props){

  let data = useContext(AuthContext)

   

  const logout = async () => {
  
try{
  await fetch('http://localhost:8000/api/logout/', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    credentials: 'include'
});
props.setName('')
}
catch(err){
  console.error(err)
}

}
let menu  
  if(props.name ==''){
    menu = (

      <div className="nav-bar">
      <div className="inner-nav">
        <div className="nav-title"><h2>Name of User Logged In</h2></div>
        <div className="nav-content">
          <Link to="/home" className="a">Home</Link>
          <Link to="/" className="a">Track</Link>
          <Link to="/" className="a">Profile</Link>
          <Link to='/login' className="a" >Login</Link>
          <Link to='/' className="a" >Register</Link>


        </div>

      </div>

    </div>
    )
    return menu

  }
  else{
    menu = (

    <div className="nav-bar">
    <div className="inner-nav">
      <div className="nav-title"><h2>Foodit</h2></div>
      <div className="nav-content">
        <Link to="/home" className="a">Home</Link>
        <Link to="/home" className="a">Track</Link>
        <Link to="/" className="a">Profile</Link>

        {data.contextData.user?
      (<p className="a" onClick={data.contextData.logOutUser}>Logout</p>):(<Link to="login">Login</Link>
      )}
        {/* <Link to='/' className="a" onClick={logout}>Logout</Link> */}

      </div>

    </div>

  </div>
    )
    return menu
  }
return menu
}