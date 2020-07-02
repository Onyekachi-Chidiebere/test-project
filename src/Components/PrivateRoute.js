import React from 'react';
import {Route,Redirect} from 'react-router-dom';
let isAuthenticated=JSON.parse(localStorage.getItem('Auth'))
const PrivateRoute = ({component:Component,...rest}) => (
    <Route {...rest} render={(props)=>(
        isAuthenticated? <Component {...props} />:<Redirect to ='/'/>
    )}/>
);

export default PrivateRoute;