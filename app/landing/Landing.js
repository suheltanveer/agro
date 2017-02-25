import React from 'react'
import { Link } from 'react-router'
import './Landing.scss'

const Landing = React.createClass({
  propTypes: {},
  render () {
    return (
      <div className='Landing'>
        <h1>Landing Page</h1>
        <Link to='/home'>Go to HomePage</Link>
      </div>
    )
  }
})

export default Landing
