import { Routes, Route } from 'react-router-dom';
import Users from './comps/Users.js';
import Home  from './comps/Home.js';
import Login  from './comps/Login.js';
import './App.css'

function App() {
  return (
    <div className="App">

    <Routes>
      <Route path = '/' element={<Home />} />
      {/* <Route path="/login" element={<Login />} /> */}

    </Routes>

      
    </div>
  );
}

export default App;
