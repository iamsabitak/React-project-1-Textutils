import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';

const propTypes = {};

//  const defaultProps = {};

const Navbar = (props) => {
    return (<nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-boy-tertiary bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">{props.Hometext}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        <div className="d-flex">
          <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:'30px',width:'30px'}}> </div>
          <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:'30px',width:'30px'}}> </div>
          <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'30px',width:'30px'}}> </div>
          <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:'30px',width:'30px'}}> </div>
        </div>
<div className={`form-check form-switch text-${props.mode==='light'? 'dark':'light'}` }>
  <input className="form-check-input" onClick={()=>{props.toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
</div>
      </div>
    </div>
  </nav>
    )
}


Navbar.propTypes = {
  title: propTypes.string,
  Hometext: propTypes.string,
    // title: propTypes.string.isRequired,
    // Hometext: propTypes.string.isRequired,
    };
//     Navbar.defaultProps = {
//         title: "textutils2",
//     Hometext: "Home2"
//     };


// Navbar.propTypes = propTypes;
// Navbar.defaultProps = defaultProps;


export default Navbar;