import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import {Grid, Image} from 'semantic-ui-react'

class Register extends Component {
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
    const registerResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users`, {
        method: 'POST',
        credentials: 'include',
      //test  
        body: JSON.stringify(this.state),
        headers:{
            "Content-type" : 'application/json',
            'Access-Control-Allow-Origin':  'https://secure-savannah-81040.herokuapp.com',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            
        }
    })

    const parsedResponse = await registerResponse.json();
    console.log(parsedResponse)
    if(parsedResponse.user) {
      this.props.doSetCurrentUser(parsedResponse.user)
        this.setState({
            logged: true,
        })
    }
    else{
      this.setState({
        message:parsedResponse.message
      })
    }
}

  render() {
    const {username, password} = this.state
    
    return(
      <div style={{marginLeft:'2em'}}>
        {
          this.state.logged
            ? <Redirect to={`/users/view/${this.props.currentUser._id}`} />
            : <div>
              
              <p>{this.state.message}</p>
              <RegisterForm 
                changeHandler={this.changeHandler}
                onSubmit={this.onSubmit}
                username={username}
                password={password}
              /></div>
        }
      </div>

    )
  }
}

const RegisterForm = ({changeHandler, onSubmit, username, password}) =>
<form onSubmit={e => onSubmit(e)}>
  <Grid rows={3} columns={2}>
  Make a new account:
   

  
    <Grid.Row>
      <Grid.Column width={1} >
        <label htmlFor="username">Username: </label>
      </Grid.Column>
      <Grid.Column width={3}>
        <input onChange={e => changeHandler(e)}type="text" name='username' placeholder='username' value={username}/>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={1}>
        <label htmlFor="password">Password: </label>
      </Grid.Column>
      <Grid.Column width={3}>
        <input onChange={e => changeHandler(e)}type="password" name='password' placeholder='password' value={password}/>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <button type='submit'>SUBMIT</button>
    </Grid.Row>
  
  </Grid>
  </form>

export default Register