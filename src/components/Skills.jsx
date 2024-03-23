import React from 'react'

const arr = ['Data structure and Algorihtms', 'Problem Solving', 'Node Js', 'Express Js', 'React Js', 'MongoDB', 'Git version control', 'C++', 'HTML', 'CSS', 'Redux and Redux toolkit','Javascript','Opps','Operating System','DBMS'];

const Skills = () => {
  return (
      <div className="skills">
          <h3>Skills</h3>
          <div className='skills-container'>
              <div className="tp">
                  <h4 className='tp1'>Frontend</h4>
                  <div className='tp1'>HTML5</div>
                  <div className='tp1'>CSS</div>
                  <div className='tp1'>React JS</div>
                  <div className='tp1'>JAVASCRIPT</div>
              </div>   
              <div className="tp">
                  <h4 className='tp1'>Backend</h4>
                  <div className='tp1'>NodeJs</div>
                  <div className='tp1'>ExpressJs</div>
                  <div className='tp1'>MongoDB</div>
                  <div className='tp1'>Redux</div>
              </div>   
              <div className="tp">
                  <h4 className='tp1'>CS Fandamental</h4>
                  <div className='tp1'>OPPs</div>
                  <div className='tp1'>DBMS</div>
                  <div className='tp1'>Operating System</div>
                  <div className='tp1'>System Design</div>
              </div>   
              <div className="tp">
                  <h4 className='tp1'>Area of interest</h4>
                  <div className='tp1'>Problem solving, C++</div>
                  <div className='tp1'>Data Structure and Algorithms</div>
                  <div className='tp1'>Competitive Programming</div>
                  <div className='tp1'>Git version control</div>
              </div>   
              <div className="tp"></div>    
          </div>
      </div>
  )
}

export default Skills
