import React from 'react'
import img from '../image1.jpg'

const Header = () => {
  return (
      <header className='header-container'>
          <div className="img">
              <img src= {img} alt=""  className='img'/>
          </div>
          <div className="info">
              <h1>Manish Yadav</h1>
              <h4>A bit about me</h4>
              <p>Hello! this is Manish Yadav 4th year under-graduate from IIT (BHU), VARANASI. My area of interest is in problem sloving and web development.</p>
          </div>
      </header>
  )
}

export default Header
