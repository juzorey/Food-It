import { set } from "animejs";
import jwt_decode from "jwt-decode";
import React, {useState, useEffect, createContext} from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

export const AuthProvider = ({children})=>{
  const navigate = useNavigate()
  
  const[loggedIn,setLoggedIn]=useState(null)
  const[loading,setLoading]=useState(true)//checks if everythign in auth provider is complete ready to call
  const[authToken,setAuthToken]=useState(()=>localStorage.getItem('authTokens') ?JSON.parse(localStorage.getItem('authTokens')):null)//with a function it calls it only one
  const[user,setUser]=useState(()=>localStorage.getItem('authTokens') ?jwt_decode(localStorage.getItem('authTokens')):null)


  let LogInUser= async(e)=>{
    e.preventDefault()
    console.log('form submitted')
    let response =  await fetch('http://localhost:8000/api/token/',{
      method:'POST',
      headers:{//data we are getting
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'username':e.target.username.value,'password':e.target.password.value})//data we are sending
    })
    let data = await response.json()
    if(response.status==200){
      setAuthToken(data)
      setUser(jwt_decode(data.access))
      localStorage.setItem('authTokens', JSON.stringify(data))
      navigate('/home')
    }else{
      alert("something went wrong");
    }
  }







  



    const logOutUser =()=>{
    setAuthToken(null)
    setUser(null)
    localStorage.removeItem('authTokens')
    navigate('/login')
  }
  let RegisterUser = async(e)=>{
    e.preventDefault()
    console.log('RegisterUser')
    let response = await fetch('http://localhost:8000/api/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({"username":e.target.username.value,"email":e.target.email.value,"password":e.target.password.value})
    })
    //make this to automatically log them in or not
    // let data = await response.json()

    if(response.status==200){
      navigate('/flogin')
    }else{
      alert("something went wrong");
    }
  }



  let updateToken= async()=>{
    console.log("updateToken")
    let response =  await fetch('http://localhost:8000/api/token/refresh/',{
      method:'POST',
      headers:{//data we are getting
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'refresh':authToken?.refresh})//data we are sending. the question mark makes sure it has somethign before call
    })
    let data = await response.json()

    if(response.status==200){
      setAuthToken(data)
      setUser(jwt_decode(data.access))
      localStorage.setItem('authTokens', JSON.stringify(data))
    }else{
      logOutUser()
    }
      if(loading){
        setLoading(false)
      }
  }



  const[userData,setUserData]= useState({
    name:"jose",
    age:"20"
  })
 
  let contextData ={
    user:user,
    authToken:authToken,

    RegisterUser:RegisterUser,
    logInUser:LogInUser,
    logOutUser:logOutUser,
  }


  useEffect(()=>{


    if(loading){
      updateToken()
    }
    let fourMinutes = 1000*6*4
    let interval = setInterval(()=>{
      if(authToken){
        updateToken()
      }
    },fourMinutes)
    return()=>{clearInterval(interval)}

  },[authToken, loading])
    return (
        <AuthContext.Provider value={{userData, setUserData,contextData,user,authToken}}>
          {loading ? null:children}
          {/* this all the items */}
        </AuthContext.Provider>
    )

  }