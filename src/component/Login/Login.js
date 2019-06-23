import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import {Grid, GridColumn,Container} from 'semantic-ui-react'

class Login extends Component {
    state = {
        username: '',
        password: '',
        logged: false,
        message:''
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    onSubmit = async (e) => {
        e.preventDefault();
        const loginResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/login`,{
          method: "POST",
          credentials: 'include',
          
          body: JSON.stringify(this.state),
          headers: {
            "Content-Type" : 'application/json'
          }
        })
        console.log("hit1")

         const parsedResponse = await loginResponse.json();
         console.log(parsedResponse)

            if(parsedResponse.success){
              //console.log(parsedResponse)
                this.props.doSetCurrentUser(parsedResponse.user)
                console.log("logged")
                this.setState({
                  logged: true,
                  message:parsedResponse.message
                })
            } else {
              this.setState({
                message: parsedResponse.message
              })
            }
    }

    render() {
      const { username, password } = this.state
      return (
        <Container textAlign='center' style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
          <h2>Login</h2>
        {this.state.logged
        ? <Redirect to={`/users/view/${this.props.currentUser._id}`} />
        
        :  <div>{this.state.message}</div>}
        
         
          <form onSubmit={this.onSubmit}>
          <Grid  >
          <Grid.Row columns={2} >
            <Grid.Column textAlign='right' >
              Username: 
              </Grid.Column>
              <Grid.Column textAlign='left'>
                <input type="text" name="username" value={username} onChange={this.changeHandler} />
            </Grid.Column>
            </Grid.Row><Grid.Row columns={2}>
            <Grid.Column textAlign='right'>
                Password: </Grid.Column> <Grid.Column textAlign='left'>
                <input type="password" name="password" value={password} onChange={this.changeHandler} />
                
            </Grid.Column>
            </Grid.Row>
            </Grid><br/>
            <button type='submit'>Submit</button>
            
            
              </form>
        
        
        </Container>
      )
    }
}

export default Login