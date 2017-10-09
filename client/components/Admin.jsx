import React, { Component } from 'react';

import '../App.css';
import Register from './Register'
import Header from './Header'

class Admin extends Component {
  render() {
    return (
      <div className="App">
          <Header name='Admin Schedule Events Page'/>
          <Register />
        </div>
    );
  }
}


export default Admin;
