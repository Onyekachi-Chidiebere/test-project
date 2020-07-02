import React,{useState,useEffect} from 'react';
import {Person,Lock} from '@material-ui/icons';
import { Redirect,Link } from 'react-router-dom';

const Login =()=>{
    
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [loggedIn,setLoggedIn] = useState(false);
    const [success,setSuccess] = useState(false);
    const [error,setError] = useState(false);
    
    const handleLogin =async(e)=>{
        e.preventDefault()
    let Users = JSON.parse(localStorage.getItem('Users'));
    if(username===''||password===''){
        setError('Missing Credentials')
        setTimeout(()=>{setError(false)},5000)
        console.log('Missing Credentials')
        return;
    }
    if(!Users){
        setError('Invalid User')
        setTimeout(()=>{setError(false)},5000)
        console.log('Invalid User')
        return;
    }
    let currentUser;
     Users.filter((user)=>{
         if(user.name===username){
             currentUser=user;
         }})
       console.log({currentUser})
    if(!currentUser){
        setError('Invalid User')
        setTimeout(()=>{setError(false)},5000)
        console.log('Invalid User')
        return;
    }
    if(currentUser.password!==password){
        setError('Incorrect password')
        setTimeout(()=>{setError(false)},5000)
        console.log('Incorrect password')
        return;
    };
    localStorage.setItem('Auth',JSON.stringify(true));
    setLoggedIn(true)  
    console.log('logged in')
    }

    if(loggedIn){
        console.log('Logged innn')
    return(
            <Redirect to='/movie'/>
        )
    }
        return (
            <div>
            <nav id='header'></nav>
                <form>
                <nav className='warn'>
                    {error&&<nav className='error'>{error}</nav>}
                    </nav>
                    <div className='contain'>
                    <p className='input'>
                        <Person className='icon'/>
                        <input
                        value={username} placeholder='Name' onChange={(e)=>{setUsername(e.target.value)}}
                        />
                    </p>
                    <p className='input'>
                        <Lock className='icon'/>
                        <input value={password} type='password' placeholder='password' onChange={(e)=>{setPassword(e.target.value)}}/>
                    </p>
                    </div>
                    <nav className='question'><i>don't have an account yet? </i><Link className='refer' to ='/signup'>Sign Up</Link></nav>
                    <button className='submit' onClick={(e)=>{handleLogin(e)}}>Login</button>
                    <footer class='footer'></footer>
                </form>
            </div>
        )
    
    };

export default Login;