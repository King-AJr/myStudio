import React from 'react'
import {Link} from 'react-router-dom'
import {HashLink as Scroll} from 'react-router-hash-link'
import Footer from './common/Footer'

function PageWrapper(props) {
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <Link className="navbar-brand" to="/">HOME</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ms-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item"><Scroll className="nav-link" to="#services">Services</Scroll></li>
                        <li className="nav-item"><Scroll className="nav-link" to="#portfolio">Portfolio</Scroll></li>
                        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                        <li className="nav-item"><Scroll className="nav-link" to="#team">Team</Scroll></li>
                        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        {props.children}
        <Footer/>
    </div>
  )
}

export default PageWrapper
