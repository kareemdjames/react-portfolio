import React from 'react'
import Paper from 'material-ui/Paper'


function Header() {

  const profileStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    border: '1px solid black'
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
      </div>
    </div>
  )
}

export default Header