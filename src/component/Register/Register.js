import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

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
        body: JSON.stringify(this.state),
        headers:{
            "Content-type" : 'application/json'
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
      <div>
        {
          this.state.logged
            ? <Redirect to={`/users/view/${this.props.currentUser._id}`} />
            : <div>
              Make a new account:
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
    <label htmlFor="username">Username</label>
    <input onChange={e => changeHandler(e)}type="text" name='username' placeholder='username' value={username}/>
    <label htmlFor="password">Password</label>
    <input onChange={e => changeHandler(e)}type="password" name='password' placeholder='password' value={password}/>
    <button type='submit'>SUBMIT</button>
  </form>


export default Register