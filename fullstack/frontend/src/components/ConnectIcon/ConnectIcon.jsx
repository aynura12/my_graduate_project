import React from 'react'
import "../ConnectIcon/connectIcon.scss"
const ConnectIcon = () => {
  return (
    <div><div className="connect_icon">
    <ul>
      <li>
        <a href="/">
          <div>
            <i className="icon1 fa-brands fa-twitter"></i>
          </div>
        </a>
      </li>
      <li>
        <a href="/">
          <div>
            <i className="icon2 fa-brands fa-facebook-f"></i>
          </div>
        </a>
      </li>
      <li>
        <a href="/">
          <div>
            <i className="icon3 fa-brands fa-pinterest"></i>
          </div>
        </a>
      </li>
      <li>
        <a href="/">
          <div>
            <i className="icon4 fa-brands fa-instagram"></i>
          </div>
        </a>
      </li>
    </ul>
  </div></div>
  )
}

export default ConnectIcon