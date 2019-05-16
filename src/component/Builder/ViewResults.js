import React, {Component} from 'react'
import FormOption from './FormOption'
const ViewResults = (props)=>{

    const allResults = props.places.map((place)=>{
        return <FormOption key={place.id} place={place}/> 
    })




    
        return(
            <div>
               
            
            <form>
                {allResults}
            </form>
            </div>
    )
}

export default ViewResults
