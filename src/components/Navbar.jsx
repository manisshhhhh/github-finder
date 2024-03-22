import { Link } from "react-router-dom"

const Navbar = () => {
  return (
      <nav className="nav">
          <div className="first">
              <Link  to='/'><div className="logo link"></div></Link>
              <Link className='link' to='/'><p>Manish Yadav</p></Link>
          </div>
          <div className="second">
              <ul>
                  <li>
                      <Link className='link' to='/resume'>Resume</Link>
                  </li>
                  <li>
                      <Link className='link' to='/contact'>Contact</Link>
                  </li>
              </ul>
          </div>
      </nav>
  )
}

export default Navbar
