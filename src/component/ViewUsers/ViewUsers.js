import React, {Component} from 'react'
import UserItem from './UserItem'
import { Card } from 'semantic-ui-react';

class ViewUsers extends Component{
    state={
        allUsers: []
    }
    
    getAllUsers =async ()=>{
        try {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/getall`)
            const users = await res.json()
            console.log(users.data)
            // console.log(res)
            this.setState({
                allUsers: users.data
            })
        } catch(err) {
            console.log(err)
        }

        
    }

    componentDidMount() {
        this.getAllUsers()
    }
    
    // allResults = this.state.allUsers.map((user)=>{
        
    //     return <UserItem key={user.id} user={user}/>
    // })




    render(){
        
        console.log(this.state.allUsers)
        return(
            <Card.Group centered>
               {
               this.state.allUsers.map((user)=>{
        
            return <UserItem key={user.id} user={user} />
    })
               }
            
            </Card.Group>
    )
}
}

export default ViewUsers
