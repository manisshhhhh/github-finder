import React from 'react'
import { Link } from 'react-router-dom'
import leetcode from '../Leetcode.png'
import codeforces from '../codeforces.webp'
import gfg from '../gfg.png'
import { SlArrowRight } from "react-icons/sl";

const Profiles = () => {
  return (
    <div className="profile-container">
      <h3>Coding Profiles</h3>
      <div className="profiles">
        <div className="item">
          <img src={leetcode} alt="" className='profile-img' />
          <div className="name">
            <p className='title'>LeetCode</p>
            <p>Max Tag: <strong>Knight</strong></p>
            <p>Max rating: <strong>1910</strong></p>
            <p className='button'><Link to='https://leetcode.com/abortive02/' className='profile-link'>Go to Profile <SlArrowRight className='pic'/></Link></p>
          </div>
        </div>

        <div className="item">
          <img src={codeforces} alt="" className='profile-img'/>
          <div className="name">
            <p className='title'>Codeforces</p>
            <p>Max Tag: <strong>Specialist</strong></p>
            <p>Max rating: <strong>1416</strong></p>
            <p className='button'><Link to='https://codeforces.com/profile/Believer_my02' className='profile-link'>Go to Profile <SlArrowRight className='pic'/></Link></p>
          </div>
        </div>

        <div className="item">
          <img src={gfg} alt="" className='profile-img'/>
          <div className="name">
            <p className='title'>GeeksForGeeks</p>
            <p>Max Tag: <strong>NA</strong></p>
            <p>Max rating: <strong>NA</strong></p>
            <p className='button'><Link to='https://auth.geeksforgeeks.org/user/manishbaran2002/practice/' className='profile-link'>Go to Profile <SlArrowRight className='pic'/></Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profiles
