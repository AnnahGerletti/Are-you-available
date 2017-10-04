import React, { Component } from 'react';

import '../App.css';
import Register from './Register'

class Admin extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Future Admin page</h2>
        </div>
        <div>
          <Register />
        </div>
      </div>
    );
  }
}


export default Admin;
