import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

class Nav extends Component {

  constructor() {
    super()

    this.state = {
      open: false
    }
  }

  render() {

    return (
      <div className="nav">
        <AppBar
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick={() => this.setState({open: !this.state.open})}
        />
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <Link to='/'>
            <MenuItem>Home</MenuItem>
          </Link>
          <Link to='/about'>
            <MenuItem>About</MenuItem>
          </Link>
          <Link to='/projects'>
            <MenuItem>Projects</MenuItem>
          </Link>
          <Link to='/contact'>
            <MenuItem>Contact</MenuItem>
          </Link>
        </Drawer>
      </div>
    )
  }
}

export default Nav