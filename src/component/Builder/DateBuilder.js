import React, {Component} from 'react'

import ViewResults from './ViewResults'
import {Button, Grid,Form, Input, Container} from 'semantic-ui-react'

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
         this.setState({[e.currentTarget.name]: e.currentTarget.value});
         console.log({[e.currentTarget.name]: e.currentTarget.value})
      
    }
        
        
    
        handleSubmit = async(e)=>{
            e.preventDefault()
            this.setState({
                searched:false
            })
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
            
            <Container textAlign='center' style={{ margin: '.5em 0em 0em', padding: '0em 0em' }}>
              

              <Form onSubmit ={ (e) => this.handleSubmit(e)}
                    >
                  
                <Form.Field inline>
                        <label>Location:</label>
                    <Input name='location' 
                           placeholder='Enter a neighborhood here' 
                           onChange={this.handleChange} 
                           autoComplete="off"/>
                </Form.Field>
                <Form.Field inline>
                        <label>Activity:</label>
                    <Input name='activity' 
                           placeholder='Enter a a fun activity' 
                           onChange={this.handleChange} 
                           autoComplete="off"/>
                </Form.Field>
                <Form.Field inline>
                        <label>Cuisine:</label>
                    <Input name='cuisine' 
                           placeholder='What do you want to eat' 
                           onChange={this.handleChange} 
                           autoComplete="off"/>
                </Form.Field>
                <Form.Button content='Search' type='submit' type='hidden'/>
            </Form>
              
            
                
            {this.state.searched &&
            <form onSubmit={(e)=>this.props.formHandleSubmit(e,this.state.activityObj,this.state.dinnerObj,this.state.location)}> 
            
                <br/>
                {
                 this.state.dinSelect
                 &&this.state.actSelect
                 ?
                    <Button primary type="submit">SUBMIT DATE</Button>
                :
                    <Button primary disabled>{this.props.currentUser.id?"MAKE A DATE":"LOG IN"} TO SUBMIT</Button>}
               <Grid columns={2} >
                   <Grid.Column>
                    <h2>{this.state.location}'s Activities</h2><br/>
                    
                        <ViewResults places={this.props.activityList} 
                            handleChange={this.handleActChange}  name="activityObj"
                        />
                    </Grid.Column>
                    <Grid.Column>
                
                    <h2>{this.state.location}'s {this.state.cuisine} Options</h2><br/>
                        <ViewResults places={this.props.dinnerList} 
                            handleChange={this.handleDinChange} name="dinnerObj"/>
                </Grid.Column>
                
                </Grid>
            </form>
            }
            
            </Container>
          )
    
      }
}

export default DateBuilder
