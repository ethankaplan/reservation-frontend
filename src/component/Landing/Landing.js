import React, {Component} from 'react'
import Register from '../Register/Register'


class Landing extends Component{
    


    render(){
        return(
            <div className="container"
            
            >This is a date building application. <br/>You register/login, then navigate
            to the build tab. There, you enter in the location of the perspective date and two activities you want to do. 
            Right now it prompts for a single activity and a cuisine for dinner.<br/><br/>
            {this.props.currentUser._id?null:
            <Register currentUser={this.props.currentUser} doSetCurrentUser={this.props.doSetCurrentUser}/>}
            </div>
        )
    }

}

export default Landing