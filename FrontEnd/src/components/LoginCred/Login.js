import './logincred.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setCookie , getCookie, deleteCookie } from '../../services/service.help';

const base_url = process.env.REACT_APP_BASE_URL;
const tokenName = process.env.REACT_APP_JWT_NAME;

const Login = () =>{
    const navigate = useNavigate();
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [errorMessage,setErrorMessage]  = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const userData = {
                username:username,
                password:password
            }
            const response = await axios.post(`${base_url}/user/login/`,userData);
            const data = response.data;
            if(getCookie(tokenName)){
                deleteCookie(tokenName);
            }
            setCookie(tokenName,data.accessToken,4);
            navigate('/');
        }
        catch(error){
            if (error.response && (error.response.status === 404 || error.response.status === 401)) {
                setErrorMessage(error.response.data.message)
            } else {
                console.error('Error:', error.message);
            }
        }
    }

    const toSignup = () => {
        navigate('/signup');
    }
    return(
        <>
            <div className='body'>
            <form onSubmit={handleSubmit} className='text-black flex flex-col gap-y-4 p-4 rounded-xl bg-gray-300'>
                <label>Username:</label>
                    <input
                        type="text"
                        id="name"
                        name="firstName"
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                        required
                        className='text-black'
                    />
                
                <br/>
                <label> Password: </label>
                    <input
                        type="password"
                        id="pass"
                        name="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                        className='text-black'
                    />
               
                <br/>
                <p>Don't have an account ? <button className='' onClick={()=>toSignup()}>Signup</button></p>
                <label>{errorMessage}</label>
                <button type="submit">Login</button>
            </form>
            </div>
        </>
    )
}

export default Login;