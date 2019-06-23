import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'
import {Card} from 'semantic-ui-react'
class UserItem extends Component{
   


    

     render(){
        
    return (
        
            <Link to={`${routes.USERS}/view/${this.props.user._id}`}>
            
            <Card className="userCard">
            
                <Card.Content>
                    <Card.Header>{this.props.user.username}</Card.Header>
                    
                    <Card.Description>
                        {this.props.user.dates.length} date{this.props.user.dates.length===1?null:"s"} created
                    </Card.Description>
                </Card.Content>
            <Card.Content extra>
           Click to view all dates
            </Card.Content>
        </Card>
        </Link>



            
        
        
    
    )}
    
}
export default UserItem;

