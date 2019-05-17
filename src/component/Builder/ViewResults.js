import React, {Component} from 'react'
import FormOption from './FormOption'
class ViewResults extends Component{

    allResults = this.props.places.map((place)=>{
        return <FormOption key={place.id} place={place} name={this.props.name} handleChange={this.props.handleChange}/>
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

export default ViewResults
