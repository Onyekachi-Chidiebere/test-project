import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Error from './Components/Error';
import Movie from './Components/Movie';
import PrivateRoute from './Components/PrivateRoute';
import './Components/style.css';
import {BrowserRouter as Router,Route,Redirect,Link,withRouter,Switch} from 'react-router-dom';
const App = ()  => {
  return (
    <Router>
      <div>
  
      <Switch>
        <Route path='/' component={Login} exact/>
        <Route path='/signup' component={SignUp}/>
        <PrivateRoute path='/movie' component={Movie}/>
        <Route component={Error}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
