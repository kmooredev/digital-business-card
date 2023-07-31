import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Bio() {
  return (
    <div>
      <h1>Korey Moore</h1>
      <h4>Fullstack Developer</h4>
      <a href="#">myportfolio.com</a>
      <div className='btn-container'>
        <button><FontAwesomeIcon icon={faEnvelope} className='mail-icon'/>Email</button>
        <button><FontAwesomeIcon icon={faLinkedin} size="lg" className='linkedin-icon'/>LinkedIn</button>
      </div>
    </div>
  )
}