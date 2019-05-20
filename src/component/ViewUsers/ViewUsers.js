import React, {Component} from 'react'
import UserItem from './UserItem'
class ViewUsers extends Component{
    state={
        allUsers=null
    }
    getAllUsers = ()=>{
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/getall`)  
    }
    allResults = this.props.places.map((place)=>{
        return <FormOption key={place.id} place={place} name={this.props.name}  handleChange={this.props.handleChange}/>
    })




    render(){
        return(
            <div>
               
            
            <fieldset className={this.props.name}>
                {this.allResults}
            </fieldset>
            </div>
    )
}
}

export default ViewUsers
