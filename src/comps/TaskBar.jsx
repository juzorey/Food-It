import React, {useContext} from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import searchFoodContextData1 from "./SearchFoodDataContext.js";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom"



const TaskBar = () => {
  let data = useContext(AuthContext)


const {DateValue, setDateValue} = useContext(searchFoodContextData1)


const handleClick = () => {
  const element = document.getElementById('charts-div');
  element.scrollIntoView({block: "start", behavior: 'smooth' });
};


  return (
    <div className="block-1-fake first-block">
      <div className="task-bar-item">
      <Link to="/home" className="a" onClick={handleClick}>Track</Link>
       



      </div>
      <div className="task-bar-item">
      <DatePicker   
       slotProps={{
        textField: {
          sx: {
            color: '#FFFFFF',
            borderRadius: '2px',
            borderWidth: '0px',
            borderColor: '#FFFFFF',
            border: '0px solid',
            backgroundColor: '#FFFFFF',
          }
        }
      }} 
        views={['year', 'month', 'day']}
        value={DateValue} onChange={(newValue) => setDateValue(newValue)}/>
      </div>
      <div className="task-bar-item">
         
      {data.contextData.user?
      (<p className="a" onClick={data.contextData.logOutUser}>Logout</p>):(<Link to="login">Login</Link>
      )}
        {/* <Link to='/' className="a" onClick={logout}>Logout</Link> */}

      </div>
    </div>
  );
};

export default TaskBar;