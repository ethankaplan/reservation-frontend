import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import DateList from '../ShowMadeDates/DateList'


class ShowUser extends Component {
  state = {
    user:{}
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
    console.log(this.state.user.dates)
    return (
      
      <div>
        Username:<br/>
        <h1>{this.state.user.username}</h1><br/>
        Dates you've made:<br/>
        <DateList deleteDate={this.props.deleteDate} dates={this.state.user.dates} id={this.state.user._id}/>
        

      </div>
    )
  }
}

export default withRouter(ShowUser)