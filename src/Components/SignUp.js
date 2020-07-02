import React,{useState,useEffect} from 'react';
import {Person,Email,Lock,Phone,Work} from '@material-ui/icons';


const SignUp =()=>{
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword]= useState('');
    const [email,setEmail]= useState('');
    const [phone, setPhone]= useState('');
    const [profession,setProfession]= useState('');
    let user={
        name,
        password,
        email,
        phone,
        profession,
    };
 const handleSignUp =()=>{
        let Users = '';
       
        if(name===''||password===''||email===''||phone===''||profession===''){
            console.log('Missing Credentials')
            return;
        }
       if(localStorage.getItem('Users') === null) {
           Users = [];
       }else{
           Users = JSON.parse(localStorage.getItem('Users'))  
       };
       Users.push(user);
       localStorage.setItem('Users',JSON.stringify(Users));    
          console.log(user)     
   }

    return (
        <div>
            <form>
                <div className='contain'>
                <p className='input'>
                    <Person className='icon'/>
                    <input
                    value={name} placeholder='Name' onChange={(e)=>{setName(e.target.value)}}
                    />
                </p>

                <p className='input'>
                    <Email className='icon'/>
                    <input 
                    value={email} type ='email' placeholder='name@gmail.com' onChange={(e)=>{setEmail(e.target.value)}}
                />
                </p>
                </div>
                <div className='contain'>
                <p className='input'>
                    <Lock className='icon'/>
                    <input value={password} type='password' placeholder='password' onChange={(e)=>{setPassword(e.target.value)}}/>
                </p>
                <p className='input'>
                    <Lock className='icon'/>
                    <input value={confirmPassword} placeholder='confirmPassword' onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
                </p>
                
                </div>
                <div className='contain'>
                <p className='input'>
                    <Phone className='icon'/>
                    <input value={phone} type ='number' placeholder='Phone' onChange={(e)=>{setPhone(e.target.value)}}/>
                </p>
                <p className='input'>
                    <Work className='icon'/>
                    <input value={profession} placeholder='Profession' onChange={(e)=>{setProfession(e.target.value)}}/>
                </p>
                </div>
                    <button className='submit' onClick={(e)=>{e.preventDefault();handleSignUp()}}> Sign Up</button>
                <footer class='footer'></footer>
            </form>
        </div>
    )
};

export default SignUp;