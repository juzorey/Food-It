import axios from "axios"
import { useNavigate } from "react-router-dom"
import React, {SyntheticEvent, useState} from 'react';
import {Redirect} from "react-router-dom";
import jwt_decode from "jwt-decode";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);


    const navigate = useNavigate()




    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();


       await fetch('http://localhost:8000/api/login/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });


          

        //   try {
        //     const response = await axios.post('http://localhost:8000/api/login/', {
        //       email,
        //       password
        //     }, {
        //       headers: { 'Content-Type': 'application/json' },
        //       withCredentials: true,
        //     }
        //     );
      
        //     const token = response.data.jwt
        //     const decodedToken = jwt_decode(token)
        //     console.log(decodedToken)


        // } catch (error) {
        //   console.error(error);
        //   console.log(error.response.data)
        // }
      

    
      }

    return (
        <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <input type="email" className="form-control" placeholder="Email address" required
                   onChange={e => setEmail(e.target.value)}
            />

            <input type="password" className="form-control" placeholder="Password" required
                   onChange={e => setPassword(e.target.value)}
            />

            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
    );
};

