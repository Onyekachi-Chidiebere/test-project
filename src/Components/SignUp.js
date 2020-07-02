import React,{useState,useEffect} from 'react';
import {Person,Email,Lock,Phone,Work} from '@material-ui/icons';
import {Link,Redirect} from 'react-router-dom';

const SignUp =()=>{
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword]= useState('');
    const [email,setEmail]= useState('');
    const [phone, setPhone]= useState('');
    const [success,setSuccess] = useState(false);
    const [error,setError] = useState(false);
    const [profession,setProfession]= useState('');
    const [signedUp,setSignedUp] =useState(false)
    let user={
        name,
        password,
        email,
        phone,
        profession,
    };
 const handleSignUp =()=>{
        let Users;
       
        if(name===''||password===''||email===''||phone===''||profession===''){
            setError('Missing Credentials')
            setTimeout(()=>{setError(false)},5000)
           console.log('Missing Credentials')
            return;
        }
        if(password!==confirmPassword){
            setError('Passwords do not match')
            setTimeout(()=>{setError(false)},5000)
           console.log('Passwords do not match')
            return;
        }
       if(localStorage.getItem('Users') === null) {
           Users = [];
       }else{
           Users = JSON.parse(localStorage.getItem('Users'))  
       };
       let alreadyRegistered
       Users.filter((user)=>{
           if(user.name===name){
               alreadyRegistered=user
           }})
       if(alreadyRegistered){
           setError('User exists already')
           setTimeout(()=>{setError(false)},5000)
           console.log('User exists already')
           return;
       }
       Users.push(user);
       localStorage.setItem('Users',JSON.stringify(Users));    
          console.log(user) 
          setSignedUp(true)
        //   setSuccess('Registered Successfully');
        //   setTimeout(()=>{setSuccess(false)},5000)  
   }
   if(signedUp){
       return(
           <Redirect to='/'/>
       )
   }
    return (
        <div>
            <nav id='header'></nav>
            <form>
                <nav className='warn'>
                {success&&<nav className='success'>{success}</nav>}
                {error&&<nav className='error'>{error}</nav>}
                </nav>
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
                    <input value={confirmPassword} type='password' placeholder='confirmPassword' onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
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
                <nav className='question'><i>Already have an account? </i><Link className='refer' to ='/'>Login</Link></nav>
                    <button className='submit' onClick={(e)=>{e.preventDefault();handleSignUp()}}> Sign Up</button>
                <footer class='footer'></footer>
            </form>
        </div>
    )
};

export default SignUp;