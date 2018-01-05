import React from 'react'
import Nav from './Nav'
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import test from './better-barber600.jpg'
import world from './world.jpeg'

function Project() {



  return(
    <div className='project'>
      <Nav />
      <h1>Projects</h1>
      <Card>
        <CardMedia
          overlay={<CardTitle title="Better Barber" />}
        >
          <img src={test} alt="test" />
        </CardMedia>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>

      <Card>
        <CardMedia
          overlay={<CardTitle title="Better Barber" />}
        >
          <img src={world} alt="test" />
        </CardMedia>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>

      <Card>
        <CardMedia
          overlay={<CardTitle title="Better Barber" />}
        >
          <img src={test} alt="test" />
        </CardMedia>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>
    </div>
  )
}

export default Project