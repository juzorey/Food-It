
import { Link } from "react-router-dom"
export default function Nav(props){


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
        <div className="nav-title"><h2>Foodit</h2></div>
        <div className="nav-content">
          <Link to="/" className="a">Home</Link>
          <Link to="/" className="a">Track</Link>
          <Link to="/" className="a">Profile</Link>
          <Link to='/login' className="a" >Login</Link>

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
        <Link to="/" className="a">Home</Link>
        <Link to="/" className="a">Track</Link>
        <Link to="/" className="a">Profile</Link>
        <Link to='/login' className="a" onClick={logout}>Logout</Link>

      </div>

    </div>

  </div>
    )
    return menu
  }
return menu
}