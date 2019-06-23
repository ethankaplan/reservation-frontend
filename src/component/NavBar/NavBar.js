import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Button } from 'semantic-ui-react'

import * as routes from '../../constants/routes'
import './NavBar.css'

class NavBar extends Component {

state={
  activeItem:"home"
}



  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

render(){
  const { activeItem } = this.state

  return(

  <div>

    
    
    
    
    
    
   
    

<Menu inverted>
        <Menu.Item
          name='Home'
          
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        > <NavLink exact to={routes.HOME} activeClassName="selected">Home</NavLink>
          
        </Menu.Item>

        <Menu.Item  name='Users' active={activeItem === 'Users'} onClick={this.handleItemClick}>
        <NavLink to={routes.USERS} activeClassName="selected">Users</NavLink>
        </Menu.Item>

        <Menu.Item
          name='Posts'
          
          active={activeItem === 'Posts'}
          onClick={this.handleItemClick}
        >
          <NavLink to={routes.POSTS} activeClassName="selected">Build A Date! </NavLink>
        </Menu.Item>

        
        {
          this.props.currentUser._id
            ? <Menu.Menu><Menu.Item ><span>Logged in as {this.props.currentUser.username}</span></Menu.Item>
            <Menu.Item><Button color="grey" onClick={this.props.doLogout}>LOGOUT</Button></Menu.Item></Menu.Menu>
            :  
            <Menu.Item
                name='Login'
                
                active={activeItem === 'Login'}
                onClick={this.handleItemClick}>
                <NavLink to={'/login'} activeClassName="selected">Login</NavLink>
            </Menu.Item>

        }
          {this.props.currentUser._id
          ?
        
        
          null
          :  <Menu.Item
          name='Register'
          
          active={activeItem === 'Register'}
          onClick={this.handleItemClick}
        ><NavLink to={'/register'} activeClassName="selected">Register </NavLink></Menu.Item>
        }
        
        <Menu.Menu position="right" >
          <Menu.Item >
          Make a Date App
          </Menu.Item>
        </Menu.Menu>
      </Menu>





  </div>
  )}
}
export default NavBar

