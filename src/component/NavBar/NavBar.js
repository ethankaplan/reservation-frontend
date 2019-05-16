import React from 'react'
import { NavLink } from 'react-router-dom'

import * as routes from '../../constants/routes'
import './NavBar.css'

const NavBar = ({currentUser,doLogout}) =>
  <div>
    <h5>NAVBAR</h5>
    
    <NavLink exact activeClassName="selected" to={routes.ROOT}>ROOT</NavLink>
    <NavLink to={routes.HOME} activeClassName="selected">HOME </NavLink>
    <NavLink to={routes.USERS} activeClassName="selected">USERS </NavLink>
    <NavLink to={routes.POSTS} activeClassName="selected">POSTS </NavLink>
    {
      currentUser
        ? <span>hello {currentUser.username} <button onClick={doLogout}>LOGOUT</button></span>
        :  <NavLink to={'/login'} activeClassName="selected">login </NavLink>
    }
    {
      currentUser
        ? <span></span>
        :  <NavLink to={'/register'} activeClassName="selected">register </NavLink>
    }
   
  </div>

export default NavBar