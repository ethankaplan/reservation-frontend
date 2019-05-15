import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import NavBar from './component/NavBar/NavBar'
import Login from './component/Login/Login'
import ShowUser from './component/ShowUser/ShowUser'
import Builder from './component/Search/DateBuilder'

import * as routes from './constants/routes'
import './App.css';

class App extends Component {
  state = {
    currentUser: null,
    buildingDate:{
      activityJ:null,
      dinnerJ:null,
      location:""
    }
    
  }

  doSetCurrentUser = user =>
    this.setState({
      currentUser: user
    })

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <NavBar currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path={routes.ROOT} render={() => <div>ROOT</div>} />
          <Route exact path={routes.HOME} render={() => <div>HOME</div>} />
          <Route exact path={routes.USERS} render={() => <div>USER</div>} />
          <Route exact path={`${routes.USERS}/:id`} render={() => <ShowUser />} />
          <Route exact path={routes.POSTS} render={() => 
                  <Builder activityList={this.state.activityJ} dinnerList={this.state.dinnerJ}/>} />
          <Route exact path={routes.LOGIN} render={() => <Login currentUser={this.state.currentUser} doSetCurrentUser={this.doSetCurrentUser}/>} />
          <Route render={() => <div>NOT FOUND</div>} />
        </Switch>
      </div>
    );
  }
}



export default App;
