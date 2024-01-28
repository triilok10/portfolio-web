import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className="main-nav-header">
                <div className="main-nav-header-logo">
                    <Link to="/"><img src="./images/triloklogo1.png" alt="logo" /></Link>
                </div>
                <div className="main-nav-header-navPanels">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/github">Github</Link></li>
                </div>
                <div className="main-nav-header-loginPage">
                    <li><Link to="/login" id='main-nav-header-loginPage-btnLogin'>Login</Link></li>
                    <li><Link to="" id='main-nav-header-loginPage-btnGetStarted'>GetStarted</Link></li>
                </div>
            </div>
        </>
    )
}

export default Header
