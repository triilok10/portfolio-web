import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className="footer-part-bottom-mailFinal">
                <div className="footer-part-bottom-mailFinal-top">
                    <div className="footer-part-bottom-mailFinal-topLeft">
                        <Link to="/"><img src="./images/triloklogo1.png" alt="" /></Link>
                    </div>
                    <div className="footer-part-bottom-mailFinal-topRight">
                        <div className="footer-part-bottom-mailFinal-topRight-resources">
                            <div className="footer-part-bottom-mailFinal-topRight-resources-left">
                                <li><b>Resources</b></li>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                            </div>
                            <div className="footer-part-bottom-mailFinal-topRight-resources-right">
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/github">Github</Link></li>
                            </div>
                        </div>
                        <div className="footer-part-bottom-mailFinal-topRight-legal-main">
                            <div className="footer-part-bottom-mailFinal-topRight-legal">
                                <li><b>Legal</b></li>
                                <li><Link to="">Privacy Policy</Link></li>
                                <li><Link to="">Terms and Conditions</Link></li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-part-bottom-mailFinal-bottom">
                    © 2023, Trilok Chand Swami. Don't hesitate to reach out. All right's reserved.
                </div>
            </div>
        </>
    )
}

export default Footer
