import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css'
import Nav from './components/Nav'


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Nav />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
