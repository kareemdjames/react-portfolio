import React from 'react'
import Paper from 'material-ui/Paper'

function Header() {

  const profileStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  }

  const paperStyle = {
    height: 200,
    width: 200,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  }

  return(
    <div className='header'>
      <div className='profile' style={profileStyle}>
        <Paper style={paperStyle} zDepth={1} circle={true} />
        <h1>Kareem James</h1>
        <h2>Web Developer</h2>
        <p>I'm a full-stack software developer, currently focused on modern front-end technologies. I'm using React to build my latest projects, and I'm loving it! If you are looking for a passionate dev to join your team send me an email or a DM!</p>
      </div>
    </div>
  )
}

export default Header