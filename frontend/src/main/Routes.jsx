import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'

import UserCrud from '../components/User/crudUser'
import About from '../components/about/About'
import Home from '../components/home/home'

export default props=>
    <Switch>
        <Route exact path='/inicio' component={Home}/>
        <Route path='/users' component={UserCrud}/>
        <Route path='/about' component={About}/>
        <Redirect from='*' to='/inicio'/>
    </Switch>
