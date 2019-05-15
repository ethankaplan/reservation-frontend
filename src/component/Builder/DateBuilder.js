import React, {Component} from 'react'

class DateBuilder extends Component{
    state = {
        search:'',
        location:'',
        activity:'',
        cuisine:'',
        searched:false


      
    }
    //  doSearch =async ()=>{

    //         try {
         
    //             const res = await fetch(`/api/v1/l_${this.state.location}/a_${this.state.activity}`)              
    //             const resJson = await res.json()
    //             const resDin = await fetch(`/api/v1/l_${this.state.location}/c_${this.state.cuisine}`)
    //             const resDinJson = await resDin.json()
    //             await this.setState({
    //                 activityResult:resJson.data,
    //                 dinnerResult:resDinJson.data,  
    //             })
    //         } catch(err) {
    //             console.log(err)  
    //         }
    //     }
     
        
    
        handleChange = async(e) => {
            e.preventDefault()
            await this.setState({[e.currentTarget.name]: e.currentTarget.value});
        }
        
    
        handleSubmit = async(e)=>{
            e.preventDefault()
            await this.props.doSearch(this.state.location,this.state.activity,this.state.cuisine)
            console.log(this.state.dinnerResult)
            console.log(this.state.activityResult)
            
        }
    
      render(){
          return(
              <div>
              <form onSubmit={this.handleSubmit}> 
                <span className="formLabel">Location:</span>
                <input type='text' name="location" placeholder="Location" 
                   onChange={this.handleChange} autoComplete="off" /><br/>
                Date Activity:
                <input type='text' name="activity" placeholder="Activity" 
                   onChange={this.handleChange} autoComplete="off"/><br/>
                Cuisine:
                <input type='text' name="cuisine" placeholder="Cuisine" 
                   onChange={this.handleChange} autoComplete="off"/>
                   <button type="submit" value="submit" hidden="hidden"/>
              </form></div>

          )
    
      }
}

export default DateBuilder
