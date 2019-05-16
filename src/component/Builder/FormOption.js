import React from 'react';


 const disStars=(num)=>{
    let string="*"
    for(let i=1;i<num;i++){
        string+="*"
    }
    return<span>{string}</span>
}
const disDol=(num)=>{
    let string="$"
    for(let i=1;i<num;i++){
        string+="$"
    }
    return<span>{string}</span>
}

const FormOption = (props) => {
  return (
    <input type="radio" value={`${this.props.place.id}`} name={`${this.props.formSubject}`}>
    <div>
        <img height="60px" width="60px" src={`${this.props.place.image_url}`}/><br/>
       <h3>{this.props.place.name}</h3> - {this.props.place.catagories.title}<br/>
       {disStars(this.props.place.rating)} - {disDol(this.props.place.price)}
        </div></input>
       
   
  )
};

export default FormOption;