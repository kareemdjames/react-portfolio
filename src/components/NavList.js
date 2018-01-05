import React from 'react'
import { Link } from 'react-router-dom'
import {List, ListItem} from 'material-ui/List'
import FontIcon from 'material-ui/FontIcon'
import Divider from 'material-ui/Divider';
import FontAwesome from 'react-fontawesome'

function NavList() {
  return(
    <div className='navlist'>
      <List>
        <Link to='/projects'>
          <ListItem
            primaryText="Projects"
            leftIcon={<FontAwesome name='rocket' size='2x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>}
          />
        </Link>
        <Divider />
        <Link to='/about'>
          <ListItem
            primaryText="About"
            leftIcon={<FontIcon className="fa fa-flask"/>}
          />
        </Link>
        <Divider />
        <Link to='contact'>
          <ListItem
            primaryText="Contact"
            leftIcon={<FontIcon className="fa fa-flask"/>}
          />
        </Link>
      </List>
    </div>
  )
}

export default NavList