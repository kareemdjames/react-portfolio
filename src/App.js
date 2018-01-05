import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css'
import Home from './components/Home'
import Project from './components/Project'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div className="App">
            <Route exact path='/' component={Home} />
            <Route path='/projects' component={Project} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
