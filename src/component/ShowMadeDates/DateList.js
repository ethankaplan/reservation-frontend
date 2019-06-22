import React, {Component} from 'react'
import DateItem from './DateItem'
class DateList extends Component{
    state={
        allDates:this.props.dates
    }
    
    
    
   




    render(){
        
        let allResults=null
        if(typeof this.props.dates !== 'undefined'){
            if(this.props.dates.length>0){
                allResults = this.props.dates.map((date)=>{
            return <div><DateItem deleteDate={this.props.deleteDate} loc={date.location} act={date.activity} din={date.dinner}/>
            <button onClick={()=>{this.props.deleteDate(date,this.props.id); this.setState({})}}>DELETE</button></div>
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
