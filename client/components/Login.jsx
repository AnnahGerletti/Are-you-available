import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'

import Header from './Header'
import api from '../api'

export default class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      // ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleClick (e) {
    e.preventDefault()
    const { username, password } = this.state
    const creds = {
      email: username.trim(),
      password: password.trim()
    }
    api.loginUser(creds)
    // this.props.loginUser(creds, () => document.location = '/#/')
  }

  render () {
    return (
      <div className="App">
        <Header name='Login Page' />
        <form onSubmit={this.handleClick} >
            <p><input className="Register-form" name='username' placeholder="Email" type="text" onChange={this.handleChange} value={this.state.username}/></p>
            <p><input className="Register-form" name='password' placeholder="Password" type="password" onChange={this.handleChange} value={this.state.password}/></p>
            <button type="submit" className="Register-button">Login</button>
        </form>
        <Link to='/events'>Events</Link>
      </div>
    )
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loginUser: (creds, cb) => {
//       return dispatch(loginUser(creds, cb))
//     }
//   }
// }
//
// export default connect(null, mapDispatchToProps)(LoginForm)
