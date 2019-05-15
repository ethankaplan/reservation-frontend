import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import NavBar from './component/NavBar/NavBar'
import Login from './component/Login/Login'
import ShowUser from './component/ShowUser/ShowUser'
import DateBuilder from './component/Builder/DateBuilder'

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

  doSearch =async (location, activity,cuisine)=>{

    try {
 
        const res = await fetch(`/api/v1/l_${location}/a_${activity}`)              
        const resJson = await res.json()
        const resDin = await fetch(`/api/v1/l_${location}/c_${cuisine}`)
        const resDinJson = await resDin.json()
        await this.setState({
            activityJ:resJson.data,
            dinnerJ:resDinJson.data,  
        })
        console.log(this.state.activityJ)
    } catch(err) {
        console.log(err)  
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
        <NavBar currentUser={this.state.currentUser}/><br/>
        <Switch>
          <Route exact path={routes.ROOT} render={() => <div>ROOT</div>} />
          <Route exact path={routes.HOME} render={() => <div>HOME</div>} />
          <Route exact path={routes.USERS} render={() => <div>USER</div>} />
          <Route exact path={`${routes.USERS}/:id`} render={() => <ShowUser />} />
          <Route exact path={routes.POSTS} render={() => 
                  <DateBuilder activityList={this.state.activityJ} dinnerList={this.state.dinnerJ} location={this.state.location} doSearch={this.doSearch}/>} />
          
          <Route exact path={routes.LOGIN} render={() => <Login currentUser={this.state.currentUser} doSetCurrentUser={this.doSetCurrentUser}/>} />
          <Route render={() => <div>NOT FOUND</div>} />
        </Switch>
      </div>
    );
  }
}



export default App;
