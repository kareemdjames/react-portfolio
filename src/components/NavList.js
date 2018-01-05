import React from 'react'
import { Link } from 'react-router-dom'
import {List, ListItem} from 'material-ui/List'
import FontIcon from 'material-ui/FontIcon'
import Divider from 'material-ui/Divider';

function NavList() {
  return(
    <div className='navlist'>
      <List>
        <Link to='/projects'>
          <ListItem
            primaryText="Projects"
            leftIcon={<FontIcon className="fa fa-flask"/>}
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