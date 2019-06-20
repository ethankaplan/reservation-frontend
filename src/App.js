import React, { Component } from 'react';
import { Switch, Route,withRouter,Redirect } from 'react-router-dom'

import NavBar from './component/NavBar/NavBar'
import Login from './component/Login/Login'
import ShowUser from './component/ShowUser/ShowUser'
import DateBuilder from './component/Builder/DateBuilder'
import ViewResults from './component/Builder/ViewResults'
import Register from "./component/Register/Register"
import ViewUsers from './component/ViewUsers/ViewUsers'
import * as routes from './constants/routes'
import './App.css';
import { isNull } from 'util';


class App extends Component {
  state = {
    currentUser: null,
    buildingDate:{
      activityJ:null,
      dinnerJ:null,
      location:"",

      dinnerObj:null,
      activityObj:null
    }
    
  }

  doSearch =async (location, activity,cuisine)=>{

    try {
      
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/l_${location}/a_${activity}`)  
        
        const resJson = await res.json()
        
        const resDin = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/v1/l_${location}/c_${cuisine}`)

      
        const resDinJson = await resDin.json()
        await this.setState({
            activityJ:resJson.data,
            dinnerJ:resDinJson.data,
            location  
        })
        
    } catch(err) {
        console.log(err)  
    }
}

deleteDate = async (date,id) => {
  const deletedDate = await fetch(`/users/delete/${id}/${date}`, {
    method: "DELETE"
  });
  const parsedResponse = await deletedDate.json();
  console.log(parsedResponse, "parsedResponse in deleteDate");
  this.setState({
    currentUser: parsedResponse.user,
  });
  
  this.props.history.push(`${routes.USERS}/view/${id}`) 
};

doCreateDate=async()=>{
  
  let newDate={
        location:this.state.location,
        activity:this.state.activityObj,
        dinner:this.state.dinnerObj
  }

  
  console.log(newDate)
  
    try {
      console.log('create hit')
        const postToUser=await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/createDate/${this.state.currentUser._id}`,{
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(newDate),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(postToUser)
    } catch (e) {
        console.log(e)
}

  this.props.history.push(`${routes.USERS}/view/${this.state.currentUser._id}`) 
}






  


formHandleSubmit=async(e,act,din,loc)=>{
  console.log(din)
  e.preventDefault()
  await this.setState({
    activityObj:act,
    dinnerObj:din,
    location:loc
  })
  
  this.doCreateDate()
}



  doSetCurrentUser = user =>
    this.setState({
      currentUser: user
    })
    doLogout=()=>{
      this.setState({
        currentUser:null
      })
      //~~~Change this to route~~~
      this.props.history.push(routes.LOGIN)
    }
  componentDidMount() {

  }

  

  render() {
    return (
      <div>
        <NavBar currentUser={this.state.currentUser} doLogout={this.doLogout}/><br/>
        <Switch>
          <Route exact path={routes.HOME} render={() => <div>HOME</div>} />
          <Route exact path={routes.USERS} render={() => <ViewUsers/>} />
          <Route exact path={`${routes.USERS}/view/:id`} render={() => <ShowUser deleteDate={this.deleteDate}/>} />
          
          <Route exact path={routes.POSTS} render={() => 
                  <DateBuilder activityList={this.state.activityJ} dinnerList={this.state.dinnerJ} location={this.state.location} doSearch={this.doSearch} formHandleSubmit={this.formHandleSubmit}/>} />
            <Route exact path={`${routes.POSTS}/buildresults`} render={() => 
                  <div><ViewResults places={this.state.activityJ}/><br/><hr/>
                  <ViewResults places={this.state.dinnerJ} /></div>} />
         
         <Route exact path={routes.REGISTER} render={() => <Register currentUser={this.state.currentUser} doSetCurrentUser={this.doSetCurrentUser}/>} />
          <Route exact path={routes.LOGIN} render={() => <Login currentUser={this.state.currentUser} doSetCurrentUser={this.doSetCurrentUser}/>} />
          <Route render={() => <div>NOT FOUND</div>} />
        </Switch>
      </div>
    );
  }
}



export default withRouter(App);
