import React from 'react'
import Nav from './Nav'
import Header from './Header'
import Divider from 'material-ui/Divider';

function Home() {

  return (
    <div className='home'>
      <Header />
      <Nav />
      <Divider />
    </div>
  )
}

export default Home