import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'
class UserItem extends Component{
   


    

     render(){
        
    return (
        <li>
            <Link to={`${routes.USERS}/view/${this.props.user._id}`}>
            {this.props.user.username} </Link>
            
            <br/>
        </li>
        
    
    )}
    
}
export default UserItem;

