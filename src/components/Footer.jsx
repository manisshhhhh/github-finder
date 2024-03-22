import { Link } from "react-router-dom"
import {FaGithub,FaLinkedin,FaEnvelope } from 'react-icons/fa'

const Footer = () => {
    let year = new Date().getFullYear();
  return (
      <footer className="footer">
          <ul className="footer-ul">
              <li><Link to='https://www.linkedin.com/in/manish-yadav-51507b219/' className="link">
                  <FaLinkedin className="icons"/>
                  Linkedin
              </Link></li>
              <li>
                  <Link to='https://github.com/manisshhhhh' className="link">
                      <FaGithub className="icons"/>
                      Github
                  </Link></li>
              <li><Link to='mailto:mystuday1@gmail.com' className="link">
                  <FaEnvelope className="icons"/>
                  mystuday1@gmail.com
              </Link>
                 
              </li>
              <li className="main-footer">
                  manish © {year}
              </li>
          </ul>
      </footer>
  )
}

export default Footer
