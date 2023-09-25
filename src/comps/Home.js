// Import the react JS packages
import TotalMacroCircle  from "./TotalMacroCircle"
import EatingTime from "./EatingTimes";
import { AllFoods } from "./AllFoods";
import MacrosBar  from "./MacrosBar";
// import Player from "./Player";
import {useEffect, useState } from "react";
import {Time} from "./Time"
import StopWatch from "./StopWatch"
import Nav from "./Nav";
import { Foods } from "./Foods";
import axios from "axios";
import {MdCheckBoxOutlineBlank, MdCheckBox} from "react-icons/md"
import{AiOutlinePlus} from "react-icons/ai"
import{ImBin} from "react-icons/im"
import { IconContext } from "react-icons";
import { Svg, Circle } from "react-native-svg";
import { Dimensions} from "react-native";

import {FaRegArrowAltCircleDown, FaRegArrowAltCircleUp} from "react-icons/fa"

// Define the Login function.
const{width, height} = Dimensions.get('window')
const CIRCLE_LENGTH = 1000
const RADIUS = CIRCLE_LENGTH/ (2* Math.PI)
const Home = (props) => {
  const [message, setMessage] = useState("");
  const[firstA,setFirstA] =useState(true)
  const[firstB,setFirstB] =useState(true)
  const[firstC,setFirstC] =useState(true)
  const[firstD,setFirstD] =useState(true)
  const[firstE,setFirstE] =useState(true)
  const[firstF,setFirstF] =useState(true)
  const[firstG,setFirstG] =useState(true)

  const[bbox,setBox] = useState('')
  const[a,setA] = useState(<MdCheckBoxOutlineBlank size="20px" color="white"/>)
  const[b,setB] = useState(<MdCheckBoxOutlineBlank size="20px" color="white"/>)
  const[c,setC] = useState(<MdCheckBoxOutlineBlank size="20px" color="white"/>)
  const[d,setD] = useState(<MdCheckBoxOutlineBlank size="20px" color="white"/>)
  const[e,setE] = useState(<MdCheckBoxOutlineBlank size="20px" color="white"/>)
  const[f,setF] = useState(<MdCheckBoxOutlineBlank size="20px" color="white"/>)
  const[g,setG] = useState(<MdCheckBoxOutlineBlank size="20px" color="white"/>)





  
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

  let box = <MdCheckBoxOutlineBlank size="20px"/>
  const [fruits, setFruits] = useState([]);
  const[count,setCount]=useState(1)

const habitTemplate = (index)=>{

  let habitSlots = (
    <div key = {index} className="habits-name-slot">
      <div >
        <input className="input-habit-name"></input>

      </div>
    <div className="habits-boxes">
      <ul className="habits-boxes">
        <li className="g"  onClick={ ()=>{
          setBox('1');
          // SwitchBoxes();
  
          }}>{a} </li>
        <li className="2"  onClick={ ()=>{
          setBox('2');
  
          // SwitchBoxes();
          }}>{b} </li>
        <li className="3" onClick={ ()=>{
          setBox('3');
  
          // SwitchBoxes();
          }}>{c} </li>
        <li className="4" onClick={ ()=>{
          setBox('4');
  
          // SwitchBoxes();
          }}>{d} </li>
        <li className="5" onClick={ ()=>{
          setBox('5');
  
          // SwitchBoxes();
          }}>{e} </li>
           <li className="6" onClick={ ()=>{
          setBox('6');
  
          // SwitchBoxes();
          }}>{f} </li>
          <li className="7" onClick={ ()=>{
          setBox('7');
  
          // SwitchBoxes();
          }}>{g} </li>
      </ul>
  
    </div>
    <div className="garbage-bin" onClick={()=>removeCards(index)}> <ImBin color="white"/> </div>
    </div>)

  return habitSlots
}


const addHabit=()=>{
if(count ==6){

  //make the new button disappear
  // in the removebutton remove a count

return
}  

  setCount(count+1) 
  setFruits([...fruits,count])
  console.log(fruits)
  console.log(count)


}
//for a map to work you need a key
const showHabitSlots=()=>{
return (
  fruits.map((fruit,index)=>{// the index is needed to have each slot unique and to be deleted
    return (<div key = {index}>
      {habitTemplate(index)}
  
    </div>)
  })
)
}

const removeCards = (index) => {
  const newFruits = fruits.filter((_, i) => i !== index);
  setFruits(newFruits);
  console.log(newFruits);
  setCount(count-1)
  
};



  useEffect(()=>{
    console.log("click")
    if(bbox == "1"){
      if(firstA == true){
        setA(<MdCheckBox size="20px" color="cyan"/>)
        setFirstA(false)
  
      } 
      else if(firstA == false){
        setA(<MdCheckBoxOutlineBlank size="20px" color="white"/>)
        setFirstA(true)
  
      }
    }
    else if(bbox == "2"){
      console.log('2')
      if(firstB == true){
        setB(<MdCheckBox size="20px" color="cyan"/>)
        setFirstB(false)
  
      } 
      else if(firstB == false){
        setB(<MdCheckBoxOutlineBlank size="20px" color="white"/>)
        setFirstB(true)
  
      }
    }
    else if(bbox == "3"){
      console.log('3')
      if(firstC == true){
        setC(<MdCheckBox size="20px" color="cyan"/>)
        setFirstC(false)
  
      } 
      else if(firstC == false){
        setC(<MdCheckBoxOutlineBlank size="20px" color="white"/>)
        setFirstC(true)
  
      }
    } else if(bbox == "4"){
      console.log('4')
      if(firstD == true){
        setD(<MdCheckBox size="20px" color="cyan"/>)
        setFirstD(false)
  
      } 
      else if(firstD == false){
        setD(<MdCheckBoxOutlineBlank size="20px" color="white"/>)
        setFirstD(true)
  
      }
    } else if(bbox == "5"){
      console.log('5')
      if(firstE == true){
        setE(<MdCheckBox size="20px" color="cyan"/>)
        setFirstE(false)
  
      } 
      else if(firstE == false){
        setE(<MdCheckBoxOutlineBlank size="20px" color="white"/>)
        setFirstE(true)
  
      }
    }
    else if(bbox == "6"){
      console.log('6')
      if(firstF == true){
        setF(<MdCheckBox size="20px" color="cyan"/>)
        setFirstF(false)
  
      } 
      else if(firstF == false){
        setF(<MdCheckBoxOutlineBlank size="20px" color="white"/>)
        setFirstF(true)
  
      }
    }
    else if(bbox == "7"){
      console.log('7')
      if(firstG == true){
        setG(<MdCheckBox size="20px" color="cyan"/>)
        setFirstG(false)
  
      } 
      else if(firstG == false){
        setG(<MdCheckBoxOutlineBlank size="20px" color="white"/>)
        setFirstG(true)
  
      }
    }
  

 },[bbox])
// this function creates the habit boxes on click







// <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
// <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>


const newButton =()=>{
return(<div>
  {count == 6? <i hidden="hidden"> <AiOutlinePlus/>New</i>:
  <i className="h"> <AiOutlinePlus/> New</i>}
</div>
)
}
  return (
    
    
    <div>
      <IconContext.Provider value={{ className:"myReact-icons", size:'70px'}}>
      <MdCheckBoxOutlineBlank />
    </IconContext.Provider>
      {/* <div className="form-signin mt-5 text-center"> 
            <h3>Hi {message}</h3>
*/}





      <div className="home">
        <div className="nav-holder">

        <Nav/>
        </div>


        
        <div className="profile-view">

          <div className="block-1">
<EatingTime/>
          </div>


          <div className="block-2">
            <div className="habits-title">Habits</div>
            <div className="habits-container">
              <div className="habits-container-inner">
                {/* <Svg>
                  <Circle cx={width/2} cy={height/2} r={RADIUS} stroke={"#404258"} strokeWdith={30}></Circle>
                </Svg> */}
                
                {showHabitSlots()}
              <div  className="new-habit-slot" onClick={addHabit} >
                {newButton()}
              </div>

                

              </div>

              <div className="habits-container-inner second">
                <div className="total-cals">
                <TotalMacroCircle/>
             

                </div>
                <div className="individual-macros">

                  <MacrosBar value={20}/>
                
                </div>




              </div>

            </div>

            <div className="block-2-display">
              <StopWatch/>
            </div>
          </div>

          <div className="profile-container">
            <div className="main-profile-info">
              <div className="box1">
                  <div className="info1">
                    <div className="a1 a2"> 
                    {props.name ? `Welcome ${props.name} Id: ${props.id}`: `Refresh you arent loggedin`}

                    </div>                    
                    <div className="a1 a2"><h2 className="text-xl">Eat More Vitamin D</h2></div>
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
                    
                  {/* <Player/> */}
</div> 

              </div>
              <div className="box1 fake2">
                <AllFoods/>
              
              
              
              </div>
              <div className="box1 fake3"></div>

            </div>
            <div className="second-profile-info">
              <div className="box2">
                <div className="box2-title"><div><h2>Entries</h2></div><div><h3>See all</h3></div></div>
                <div className="box2-sections"><p>All</p><p>Breakfast</p><p>Lunch</p><p>Diner</p></div>

                <Foods />
                {/* <Foods />
                <Foods />
                <Foods /> */} 



             
              </div>
              <div className="box3 ">

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home