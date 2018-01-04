import React from 'react'
import Nav from './Nav'
import Paper from 'material-ui/Paper';

function Home() {

  const paperStyle = {
    height: 200,
    width: 200,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  };

  const profileStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    border: '1px solid black'

  }

  return (
    <div className='home'>
      <Nav />
      <div className='profile' style={profileStyle}>
        <Paper style={paperStyle} zDepth={1} circle={true} />
        <h1>Kareem James</h1>
        <p>I'm a full-stack software developer, currently focused on modern front-end technologies. I'm using React to build my latest projects, and I'm loving it! If you are looking for a passionate dev to join your team send me an email or a DM!</p>
      </div>

    </div>
  )
}

export default Home