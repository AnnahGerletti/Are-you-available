import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'

import Header from './Header'

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
  loginUser (creds) {
    request
      .post('http://localhost:3000/api/login')
      .send(creds) // sends a JSON post body
      .end((err, res) => {
        console.log('err' + err)
        console.log(res.body)
        if (res.body.length === 0) {
          alert('Not a user')
        } else if (res.body.length === 1 && res.body[0].isAdmin === 1) {
          alert('Admin User')
          document.location = '/#/admin'
        } else {
          alert('Standard User')
          document.location = '/#/events'
        }
        // Calling the end function will send the request
      })
  }
  handleClick (e) {
    e.preventDefault()
    const { username, password } = this.state
    const creds = {
      email: username.trim(),
      password: password.trim()
    }
    this.loginUser(creds)
    // this.props.loginUser(creds, () => document.location = '/#/')
  }

  render () {
    return (
      <div className="App">
        <Header name='Login Page' />
        <form onSubmit={this.handleClick} >
          <p><input className="Form" name='username' placeholder="Login" type="text" onChange={this.handleChange} placeholder='Username' /></p>
        <p><input className="Form" name='password' placeholder="Password" type="text" onChange={this.handleChange} placeholder='Password' /></p>
          <button type="submit" className="Form-Button">Login</button>
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
