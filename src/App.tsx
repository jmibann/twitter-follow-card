import React from 'react';

import './App.css'
import TwitterFollowCard  from './TwitterFollowCard';

const USERS = [{
    username: 'jmibann',
    name: 'Juan Manuel Ibañez',
    isFollowing: true,
  },{
    username: 'carcarletti',
    name: 'Carlos Carletti',
    isFollowing: false,
  },{
    username: 'kukuima',
    name: 'Kuima Hagiwara',
    isFollowing: true,
  },{
    username: 'sirocco',
    name: 'Coco Scirocco',
    isFollowing: false,
  },

]

function App() {
  return (
    <section className='App'>
      {/* <TwitterFollowCard username='testUsername' name="testName" isFollowing /> */}
        {
          USERS.map( user => <TwitterFollowCard {...user} />)
        }    
    </section>
  )
}

export default App
