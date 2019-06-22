import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import ViewResults from './ViewResults'
import {Button} from 'semantic-ui-react'

class DateBuilder extends Component{
    state = {
        search:'',
        location:'',
        activity:'',
        cuisine:'',
        searched:false,
        dinnerResult:null,
        activityResult:null,
        activityObj:null,
        dinnerObj:null,
        dinSelect:false,
        actSelect:false

      
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
        this.setState({[e.currentTarget.name]: e.currentTarget.value});
        
      
    }

    handleDinChange = async(e,din) => {
        e.preventDefault()
        console.log(din)
        await this.setState({
            dinnerObj:din,
            dinSelect:true
        });
    }

    handleActChange = async(e,act) => {
        e.preventDefault()
        console.log(act)
        await this.setState({
            activityObj:act,
            actSelect:true
        });
        
      
    }
    handleRadioChange = async(e,name,obj) => {
        e.preventDefault()
        await this.setState({[e.currentTarget.name]: e.currentTarget.value});
        await console.log({[e.currentTarget.name]: e.currentTarget.value})
      
    }
        
        
    
        handleSubmit = async(e)=>{
            e.preventDefault()
            this.setState({
                searched:false
            })
            console.log(this.state.location)
            await this.props.doSearch(this.state.location,this.state.activity,this.state.cuisine)
            // await this.setState({
            //     dinnerResult:,
            //     activityResult:this.props.activityList
            // })
            console.log(this.props.dinnerList)
            console.log(this.props.activityList)
            this.setState({
                searched:true
            })
            
            
        }
    
      render(){
          return(
            
            <div>
              <div className="entryForm">      
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


            {this.state.searched &&
            <form onSubmit={(e)=>this.props.formHandleSubmit(e,this.state.activityObj,this.state.dinnerObj,this.state.location)}> 
                {this.props.currentUser
                 &&this.state.dinSelect
                 &&this.state.actSelect
                 ?
                    <Button primary type="submit">SUBMIT DATE</Button>
                :
                    <Button primary disabled>MAKE DATE TO SUBMIT</Button>}
                <h2>{this.state.location}'s Activities</h2><br/>
                <ViewResults places={this.props.activityList} 
                    handleChange={this.handleActChange}  name="activityObj"
                />
                <br/><hr/>
                <h2>{this.state.location}'s {this.state.cuisine} Options</h2><br/>
                <ViewResults places={this.props.dinnerList} 
                    handleChange={this.handleDinChange} name="dinnerObj"/>
            </form>
            }
            </div>
          )
    
      }
}

export default DateBuilder
