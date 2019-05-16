import React, {Component} from 'react'
import FormOption from './FormOption'
class ViewResults extends Component{
    state={
        selectedDin:null,
        selectedAct:null
        
    }
    choiceList = (props) => {
        
      const listItems = props.map((place,formSubject) => {
        return <FormOption key={place.id} place={place} formSubject={formSubject}/>
      })}




    render(){
        return(
            <div>
            <form>
                <fieldset id="actSelect">
                {this.choiceList(this.props.activityJ,"actSelect")}
                </fieldset>
                <br/>
                <fieldset id="dinSelect">
                {this.choiceList(this.props.dinnerJ,"dinSelect")}
                
                </fieldset>
            
            
            </form>
            </div>
    )}



}