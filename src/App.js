import { Routes, Route } from 'react-router-dom';
import Users from './comps/Users.js';
import './App.css'

function App() {
  return (
    <div className="App">

    <Routes>
      <Route path = '/' element={<Users />} />
    </Routes>
      
    </div>
  );
}

export default App;
