import React from 'react'
import './Feed.scss';
import HeaderComponent from '../Components/HeaderComponent'

const Feed = () => {
  return (
    <div className='container-feed'>
        <div className='header-component'><HeaderComponent/></div>
        <div className='corpo'></div>
    </div>
  )
}

export default Feed