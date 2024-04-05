import { IoMdArrowDropdown } from "react-icons/io";
import { useContext } from "react";
import searchFoodContextData from './SearchFoodDataContext.js';
import Calender from "./Calender.jsx";
const DateMenu  =()=>{

  const { setHead }= useContext(searchFoodContextData)

  const handleClick=(event)=>{
    console.log(event.target.getAttribute('value'))
    setHead(event.target.getAttribute('value'))
  }



return(
    <div class="menu-container">
        <nav class="menu-navbar">
            <ul class="menu-nav-links">
                <li class="menu-nav-link" onClick={handleClick}  name ="0" value="0">
                    <a href="#"  onClick={handleClick}  name ="0" value="0">Home</a>
                </li>
                
                <li class="menu-nav-link" onClick={handleClick}  name ="1" value="1" >
                    <a href="#"  onClick={handleClick}  name ="1" value="1">About</a>
                </li>
                <li class="menu-nav-link"  onClick={handleClick}  name ="2" value="2">
                    <a href="#"  onClick={handleClick}  name ="2" value="2">About</a>
                </li>
                <li class="menu-nav-link services" onClick={handleClick}  name ="3" value="3" >
                    <Calender/>
                    {/* <a href="#"  onClick={handleClick}  name ="3" value="3">Today
                        <span class="material-icons dropdown-icon">
                          <IoMdArrowDropdown/>

                        </span>
                    </a>
                    <ul class="drop-down">
                        <li>Service 1</li>
                        <li>Service 2</li>
                        <li>Service 3</li>
                    </ul> */}
                </li>
                <li class="menu-nav-link" onClick={handleClick}  name ="4" value="4">
                    <a href="#"  onClick={handleClick}  name ="4" value="4">About</a>
                </li>
                <li class="menu-nav-link"  onClick={handleClick}  name ="5" value="5">
                    <a href="#"  onClick={handleClick}  name ="5" value="5">About</a>
                </li>
                <li class="menu-nav-link" onClick={handleClick}  name ="6" value="6">
                    <a href="#"  onClick={handleClick}  name ="6" value="6">Contact</a>
                </li>
            </ul>
        </nav>
    </div>

)}

export default DateMenu