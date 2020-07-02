import React,{useState,useEffect} from 'react';
import {Person,Lock} from '@material-ui/icons';
import { Redirect,Link } from 'react-router-dom';



const Login =()=>{
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [loggedIn,setLoggedIn] = useState(false);
    
    
    const handleLogin =async(data)=>{
        let url = "https://hoblist.com/movieList";
        
        let response = await fetch(url,{
            method:'POST',
            redirect:'follow',
            credentials:'same-origin',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                category:'movies',
                language:'telugu',
                genre:'all',
                sort:'voting'
            })
        })
        let result = await response.text()
        console.log(response, result)
        let Users = JSON.parse(localStorage.getItem('Users'));
        Users.forEach((user)=>{
            if(user.name===username && user.password===password){
                localStorage.setItem('Auth',JSON.stringify(true));
                setLoggedIn(true)  
                console.log('logged in')
                 
            }else{
                localStorage.setItem('Auth',JSON.stringify(false)); 
                console.log('not logged in')   
            }
        }) 
                
            
    }
    if(loggedIn===true){
        return(
            <Redirect to='/movie'/>
        )
    }
    return (
        <div>
            <form>
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
                <button className='submit' onClick={(e)=>{e.preventDefault();handleLogin(null)}}>Login</button>
                <footer class='footer'></footer>
            </form>
        </div>
    )
};

export default Login;