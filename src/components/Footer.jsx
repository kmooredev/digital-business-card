// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareTwitter, faGithubSquare, faInstagramSquare, faFacebookSquare, } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <div className="footer">
      <ul>
        <li><FontAwesomeIcon icon={faSquareTwitter} size="2xl" className="icon" /></li>
        <li><FontAwesomeIcon icon={faGithubSquare} size="2xl" className="icon" /></li>
        <li><FontAwesomeIcon icon={faInstagramSquare} size="2xl" className="icon" /></li>
        <li><FontAwesomeIcon icon={faFacebookSquare} size="2xl" className="icon" /></li>
      </ul>
    </div>
  )
}