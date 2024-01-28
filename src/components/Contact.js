import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'

export default function Contact() {
    return (
        <>
            <Header />
            <div className="mainCenter-ContactPanelWork">
                <h1>Love to hear from You</h1>
            </div>
            <div className="mainCenter-ContactPanelWork-fxImg">
                <div className="mainCenter-ContactPanelWork-fxImg-lt">
                    <img src="./images/contactUs.webp" alt="" />
                </div>
                <div className="mainCenter-ContactPanelWork-fxImg-rt">
                    <div className="mainCenter-ContactPanelWork-fxImg-rtAlign">
                        <h1>We get back to you</h1>
                        <b>Name <input type="text" placeholder='Write your name here' /></b><br />
                        <b>Email <input type="text" placeholder='Write your Email here' /></b><br />
                        <b>Phone No. <input type="text" placeholder='Write your Phone Number here' /></b>
                        <br />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
            <div className="contactUs-SocialHandle-Click">
                <div className="contactUs-SocialHandle-Click-align">
                    <h1>Social Media Handle</h1>
                    <Link to=""><img src="./images/facebook.svg" alt="" /></Link>
                    <Link to=""><img src="./images/instagram.svg" alt="" /></Link>
                    <Link to=""><img src="./images/linkdin.svg" alt="" /></Link>
                    <Link to=""><img src="./images/twitter.svg" alt="" /></Link>
                    <Link to=""><img src="./images/you-tube.svg" alt="" /></Link>
                </div>
            </div>
            <Footer />
        </>
    )
}
