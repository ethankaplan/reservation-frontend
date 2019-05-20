import React, {Component} from 'react'
import UserItem from './UserItem'
class ViewUsers extends Component{
    state={
        allUsers: {
            "user": [
                {
                    "dates": [],
                    "_id": "5ce233add3d37012c9cbca01",
                    "username": "1",
                    "password": "1",
                    "__v": 0
                },
                {
                    "dates": [],
                    "_id": "5ce23563d3d37012c9cbca02",
                    "username": "1",
                    "password": "1",
                    "__v": 0
                }
            ]
        }
    }
    
    getAllUsers =async ()=>{
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/getall`)
        console.log(res)
        this.setState({
            allUsers:res
        })
        
    }
    
    allResults = this.state.allUsers.user.map((user)=>{
        
        return <UserItem key={user.id} user={user}/>
    })




    render(){
        
        console.log(this.allUsers)
        return(
            <ul>
               
                {this.allResults}
            
            </ul>
    )
}
}

export default ViewUsers
