import React from 'react';


 const disStars=(num)=>{
    let string="*"
    for(let i=1;i<num;i++){
        string+="*"
     
    }
    return<span>{string}</span>
}

const disCat=(place)=>{
    let string = ""
    for(let i = 0;i<place.categories.length;i++){
        let temp =place.categories[i].title
        string=string+", "+temp
    }
    return <span>{string}</span>
}

const FormOption = (props) => {
  return (
    <div>
    <input type="radio" name={props.name} value={props.place}/>
         <img height="60px" width="60px" alt="place" src={`${props.place.image_url}`}/>
        <h3>{props.place.name}</h3> - <small>Catagories:{disCat(props.place)}</small>
        {disStars(props.place.rating)}
    </div>
       
   
  )
};

export default FormOption;

