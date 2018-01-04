import React from 'react'
import {List, ListItem} from 'material-ui/List'
import FontIcon from 'material-ui/FontIcon'
import Divider from 'material-ui/Divider';

function NavList() {
  return(
    <div className='navlist'>
      <List>
        <ListItem
          primaryText="Projects"
          leftIcon={<FontIcon className="fa fa-flask"/>}
        />
        <Divider />
        <ListItem
          primaryText="About"
          leftIcon={<FontIcon className="fa fa-flask"/>}
        />
        <Divider />
        <ListItem
          primaryText="Contact"
          leftIcon={<FontIcon className="fa fa-flask"/>}
        />
      </List>
    </div>
  )
}

export default NavList