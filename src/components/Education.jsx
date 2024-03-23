import React from 'react'
import img from '../logo.png'

const Education = () => {
  return (
      <div className="edu">
          <h2>Education</h2>
          <div className="edu-container">
             <img src={img} alt="IIT BHU, VARANASI" className='college' />
              <div className="small">
                  <h3 className='ed'>Indian Institute of Technology (BHU) ,VARANASI</h3>
                  <h4 className='ed'>session: 2020 - 2024</h4>
                  <h4 className='ed'>CPI: 8.74</h4>
             </div>
          </div>
      </div>
  )
}

export default Education
