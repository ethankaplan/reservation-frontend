import React, {Component} from 'react'
import DateItem from './DateItem'
class DateList extends Component{
    state={
        allDates:this.props.dates
    }
    
    
    
   




    render(){
        console.log(this.state.allDates)
        let allResults=null
        if(typeof this.props.dates !== 'undefined'){
            if(this.props.dates.length>0){
                allResults = this.props.dates.map((date)=>{
            return <DateItem loc={date.location} act={date.activity} din={date.dinner}/>
        })}}else{
         allResults=<div>No dates yet!</div>
        }
        
        return(
            <ul>
               {allResults}
            
            </ul>
    )
}
}


export default DateList
