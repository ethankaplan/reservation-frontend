import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import DateList from '../ShowMadeDates/DateList'


class ShowUser extends Component {
  state = {
    user:{},
    ref:false
  }
  
  componentDidMount() {
    this.doGetUser()
      .then(({user}) => this.setState({user}))
  }

  
  doGetUser = async () => {
    try {
      const user = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/view/${this.props.match.params.id}`)
      const parsedUser = await user.json()
      return parsedUser 
    } catch(err) {
      console.log(err)
    }
  }
  render() {
    console.log(this.props.currentUser)
    console.log(this.state.user)
    return (
      
      <div style={{marginLeft:'1em'}}>
        Username:<br/>
        <h1>{this.state.user.username}</h1><br/>
        Dates {this.props.match.params.id===this.props.currentUser._id? "you've":"they've"} made:<br/>
        <DateList thisUserID={this.props.match.params.id} currentUser={this.props.currentUser}
                  deleteDate={this.props.deleteDate}  dates={this.state.user.dates} id={this.state.user._id}/>
        

      </div>
    )
  }
}

export default withRouter(ShowUser)