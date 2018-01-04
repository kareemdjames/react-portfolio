import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div className="App">
            <Route exact path='/' component={Home} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
