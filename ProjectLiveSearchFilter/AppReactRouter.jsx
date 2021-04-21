
                                                            //vdeo 56,57,58,59,60,61,62,63,64,65
import React from 'react';
import {Redirect, Route,Switch} from "react-router-dom";        //Redirect for vdeo 65
import About from "./AboutComp";                 //vdeo 56
import Contact from "./ContactComp";             //vdeo 56
import Error from './ErrorComp';                 //vdeo 56,64
import Service from './ServiceComp';             //vdeo 58
import User from './UseParamUserComp';           //vdeo 59
import Menu from './ReactRouterNavbarMenu';      //vdeo 57
import Search from './SearchComp';               //vdeo 62
const App=()=>
{
    
    return (
        <>
        <Menu/>
        <Switch>
            <Route exact path='/' component={About}/>
            <Route 
                exact
                path='/service'
                render={()=><Service name="Service"/>}/>
            <Route exact path='/search' component={Search}/> 
            <Route exact path='/user/:fname/:lname' component={User}/>   
            <Route path='/contact' component={()=><Contact/>}/>     
            <Route component={Error}/>
            <Redirect to="/"/>
        </Switch>
        </>
    );
    
};
export default App;