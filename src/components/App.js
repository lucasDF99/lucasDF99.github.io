import React, { Component } from 'react'
import './App.css'
import TopBar from './TopBar'
import Profile from './Profile'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <Profile /> 
        <Footer />
      </div>
    )
  }
}

export default App;
