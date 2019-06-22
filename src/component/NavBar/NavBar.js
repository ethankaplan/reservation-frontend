import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

import * as routes from '../../constants/routes'
import './NavBar.css'

class NavBar extends Component {

state={
  activeItem:""
}



  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

render(){
  const { activeItem } = this.state

  return(

  <div>

    
    
    
    
    
    
   
    

<Menu>
        <Menu.Item
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        > <NavLink exact to={routes.HOME} activeClassName="selected">HOME </NavLink>
          
        </Menu.Item>

        <Menu.Item name='Users' active={activeItem === 'Users'} onClick={this.handleItemClick}>
        <NavLink to={routes.USERS} activeClassName="selected">USERS </NavLink>
        </Menu.Item>

        <Menu.Item
          name='Posts'
          active={activeItem === 'Posts'}
          onClick={this.handleItemClick}
        >
          <NavLink to={routes.POSTS} activeClassName="selected">POSTS </NavLink>
        </Menu.Item>

        <Menu.Item
          name='Login'
          active={activeItem === 'Login'}
          onClick={this.handleItemClick}
        >
        {
          this.props.currentUser._id
            ? <span>hello {this.props.currentUser.username} <button onClick={this.props.doLogout}>LOGOUT</button></span>
            :  <NavLink to={'/login'} activeClassName="selected">login </NavLink>
        }   
        </Menu.Item>
        <Menu.Item
          name='Register'
          active={activeItem === 'Register'}
          onClick={this.handleItemClick}
        >
        {
          this.props.currentUser._id
          ? <span></span>
          :  <NavLink to={'/register'} activeClassName="selected">Register </NavLink>
        }
        </Menu.Item>
      </Menu>





  </div>
  )}
}
export default NavBar

