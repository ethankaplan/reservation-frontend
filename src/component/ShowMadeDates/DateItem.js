import React, {Component} from 'react';

class DateItem extends Component{
   


    
//The categories object isn't pulled in currently, but will be when fetch works
//Will add links, too.
     render(){
    return (
        <div>
        <li>
            Location:{this.props.loc}<br/>
            <ul>Activity:<br/>
            <li>{this.props.act.name} for some {this.props.act.categories[0].title}<br/>
            {this.props.act.location.address1}, {this.props.act.location.zip_code}</li></ul>
            <ul>Dinner:
            <li>{this.props.din.name} for some {this.props.din.categories[0].title}<br/>
            {this.props.din.location.address1}, {this.props.din.location.zip_code}</li></ul>
            
            
            
           
        </li>
        </div>
    
    )}
    
}
export default DateItem;

