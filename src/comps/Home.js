// Import the react JS packages
import Player from "./Player";
import { useEffect, useState } from "react";
import Nav from "./Nav";
import axios from "axios";
import {FaRegArrowAltCircleDown, FaRegArrowAltCircleUp} from "react-icons/fa"

// Define the Login function.
const Home = () => {
  const [message, setMessage] = useState("");

  
  // useEffect(() => {
  //   if (localStorage.getItem("access_token") === null) {
  //     window.location.href = "/login";
  //   } else {
  //     (async () => {
  //       try {
  //         const { data } = await axios.get("http://localhost:8000/home/", {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         });
  //         setMessage(data.message);
  //       } catch (e) {
  //         console.log("not auth");
  //       }
  //     })();
  //   }
  // }, []);

  return (
    
    <div>
      {/* <div className="form-signin mt-5 text-center"> 
            <h3>Hi {message}</h3>
*/}
      <div className="home">
        <div className="nav-holder">

        <Nav/>
        </div>


        
        <div className="profile-view">
          <div className="profile-container">
            <div className="main-profile-info">
              <div className="box1">
                  <div className="info1">
                    <div className="a1 a2">Manifest 
                      <div className="hello">Hello World</div>
                    </div>                    
                    <div className="a1 a2"><h2>Eat Vegetables</h2></div>
                    <div className="a1 a3">
                      <div className="b1">
                        <div className="underline"><FaRegArrowAltCircleDown/>Weight</div>
                        <div className="underline">10lbs</div>
                      </div>
                      <div className="b1">     
                        <div  ><FaRegArrowAltCircleUp/>Calories</div>
                        <div>100kcal</div>
                      </div>

                    </div>


                    

                  </div> 
                  <div className="info1">
                    
                  <Player/>
</div> 

              </div>
              <div className="box1">b</div>
              <div className="box1">c</div>

            </div>
            <div className="second-profile-info">
              <div className="box2">
                <div className="box2-title"><div><h2>Entries</h2></div><div><h3>See all</h3></div></div>
                <div className="box2-sections"><p>All</p><p>Breakfast</p><p>Lunch</p><p>Diner</p></div>
                <div className="profile-food-entries">
                  <div className="cube1"></div>
                  <div className="cube2"></div>
                  <div className="cube3"></div>

                </div>
                <div className="profile-food-entries">
                  <div className="cube1"></div>
                  <div className="cube2"></div>
                  <div className="cube3"></div> 
                
                </div>
                <div className="profile-food-entries"> </div>
                <div className="profile-food-entries"> </div>


              </div>
              <div className="box3">

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home