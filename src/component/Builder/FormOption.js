import React, {Component} from 'react';

class FormOption extends Component{
    state={
        selectedPlace:null
    }
     disStars=(num)=>{
        let string="*"
        for(let i=1;i<num;i++){
            string+="*"
        
        }
        return<span>{string}</span>
    }

     disCat=(place)=>{
        let string = ""
        for(let i = 0;i<place.categories.length;i++){
            let temp =place.categories[i].title
            string=string+", "+temp
        }
        return <span>{string}</span>
    }

     getObjectFromForm = (place) => {
        this.setState({
            selectedPlace: place
        })
        

    }

     render(){
    return (
        <div>
        <input type="radio" name={this.props.name} value={this.props.place} onChange={(e)=>this.props.handleChange(e,this.props.place)}/>
            <img height="60px" width="60px" alt="place" src={`${this.props.place.image_url}`}/>
            <h3>{this.props.place.name}</h3> - <small>Catagories:{this.disCat(this.props.place)}</small>
            {this.disStars(this.props.place.rating)}<br/>
            <hr/>
        </div>
        
    
    )}
    
}
export default FormOption;

