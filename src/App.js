import Nav from './comps/Nav.js';
import { Routes, Route } from 'react-router-dom';
import Users from './comps/Users.js';
import Home  from './comps/Home.js';
import {Login}  from './comps/Login.js';
import { useEffect, useState,useContext } from 'react';
import './App.css'
import { Foods } from './comps/Foods.js';
import { Register } from './comps/Register.js';
import FakePage from './comps/FakePage.js';
import FakeLogIn from './comps/FakeLogIn.js';
import Headers from './comps/Headers.js';
import PrivateRoutes from './utils/PrivateRoute.js';
import {AuthProvider} from './contexts/AuthContext.js';
import {EatingTimeContext} from './comps/EatingTimes.js';
import { FoodNutrionApi } from './comps/FoodNutrionApi.js';
import {SearchFood }from './comps/SearchFood.js';
import SearchFoodProvider from './comps/SearchFoodProvider.js'
function App() {



  const[name,setName] =useState('')
  const[id,setId] =useState('')


//   useEffect(()=>{
//   (
//   async()=>{


//     const response = await fetch('http://localhost:8000/api/user/', {
//        headers: {'Content-Type': 'application/json'},
//       credentials: 'include',
     
//   });
// const content = await response.json();
// setName(content.name)
// setId(content.id)

//   }
// )(

// )
// },[])




  return (
    <div className="App">

    <AuthProvider>


      {/* <Headers/> */}
    <FoodNutrionApi>

    <Routes>
        {/* <Route path="/search" element={<SearchFood/>}/> */}
        <Route path="/register" element ={<Register/>}/>
        <Route path = '/home' element={<Home name={name} id={id} />} />
        <Route path = '/login' element={<Login setName={setName} />} />
        <Route path = '/' element={<Register />} />
        <Route element={<PrivateRoutes/>}>
          <Route path = '/home' element={<FakePage/>} exact/>
        </Route>
        <Route path = '/flogin' element={<FakeLogIn />}  />

        <Route path = '/foods' element={<Foods setName={setName} />} /> 


        {/* <Route path="/login" element={<Login />} /> */}
    </Routes>

    </FoodNutrionApi>

    </AuthProvider>





      
    </div>
  );
}

export default App;

