
import { Link } from "react-router-dom"
export default function Nav(){
  return(
    <div className="nav-bar">
      <div className="inner-nav">
        <div className="nav-title"><h2>Foodit</h2></div>
        <div className="nav-content">
          <Link to="/" className="a">Home</Link>
          <Link to="/" className="a">Track</Link>
          <Link to="/" className="a">Profile</Link>

        </div>

      </div>

    </div>
  )
}