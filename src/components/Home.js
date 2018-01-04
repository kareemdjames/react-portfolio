import React from 'react'
import Nav from './Nav'
import Header from './Header'
import NavList from './NavList'
import Divider from 'material-ui/Divider';

function Home() {

  return (
    <div className='home'>
      <Nav />
      <Header />
      <Divider />
      <NavList />
    </div>
  )
}

export default Home