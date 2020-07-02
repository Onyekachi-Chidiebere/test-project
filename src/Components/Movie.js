import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import photo from './download.jpeg';
const Movie =()=>{
    const [token,setToken] =useState(localStorage.getItem('Auth'));
    const handleLogout =()=>{
    setToken(false);
    localStorage.setItem('Auth',JSON.stringify(false));
    console.log({token})
    }
    return (
        <div>
            <nav id='header'><Link className='logout' to='/' onClick={handleLogout}>Log out</Link></nav>
            <form>
               <div>
                   <img src={photo}/>
               </div>
               <footer class='footer'></footer>
            </form>
        </div>
    )
};

export default Movie;