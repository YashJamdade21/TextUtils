import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/">{props.aboutText}</a> */}
          <a className="nav-link" href="/">About1</a>
        </li>
      </ul>
      
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} >
      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enabled DarkMode</label>
    </div>
    </div>
  </div>
  </nav>
  )
}
Navbar.prototype = {
    title: PropTypes.string,
    aboutText:PropTypes.string
}
Navbar.defaultProps = {
    title:'Set title here',
    aboutText:'About text here'
};