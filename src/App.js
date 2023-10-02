import Nav from './comps/Nav.js';
import { Routes, Route } from 'react-router-dom';
import Users from './comps/Users.js';
import Home  from './comps/Home.js';
import {Login}  from './comps/Login.js';
import { useEffect, useState } from 'react';
import './App.css'
import { Foods } from './comps/Foods.js';
import { Register } from './comps/Register.js';
import FakePage from './comps/FakePage.js';
import FakeLogIn from './comps/FakeLogIn.js';
import Headers from './comps/Headers.js';
import PrivateRoutes from './utils/PrivateRoute.js';
import {AuthProvider} from './contexts/AuthContext.js';

function App() {



 
  const[name,setName] =useState('')
  const[id,setId] =useState('')


  useEffect(()=>{
(
  async()=>{


    const response = await fetch('http://localhost:8000/api/user/', {
       headers: {'Content-Type': 'application/json'},
      credentials: 'include',
     
  });
const content = await response.json();
setName(content.name)
setId(content.id)



  }
)(

)
},[])




  return (
    <div className="App">
{/* <Nav name={name}         setName={setName}
/> */}
    <AuthProvider>
      <Headers/>
  

    <Routes>
        <Route path = '/home' element={<Home name={name} id={id} />} />
        <Route path = '/login' element={<Login setName={setName} />} />
        <Route path = '/' element={<Register />} />
        <Route element={<PrivateRoutes/>}>
          <Route path = '/fake' element={<FakePage/>} exact/>
        </Route>
        <Route path = '/flogin' element={<FakeLogIn />} exact />

        <Route path = '/foods' element={<Foods setName={setName} />} /> 


        <Route path="/login" element={<Login />} />
    </Routes>
    </AuthProvider>



      
    </div>
  );
}

export default App;

