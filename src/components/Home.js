import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <Header />
            <div className="home-Main-Portfolio">
                <div className="home-Main-Portfolio-left">
                    <p>Hey there, Everyone</p>
                    <h1>I’m <span id='home-Main-Portfolio-left-userName'>Trilok Chand Swami</span>, Web-Developer by ♥️ and programmer by profession.</h1>
                </div>
                <div className="home-Main-Portfolio-right-align">
                    <div className="home-Main-Portfolio-right">
                        <h1>Make your next move, Your best move.</h1>
                        <div className="home-Main-Portfolio-right-boxBtn">
                            <div className="home-Main-Portfolio-right-boxBtn-website">
                                <Link to=""> Work with Trilok</Link>
                            </div>
                            <div className="home-Main-Portfolio-right-boxBtn-projcets">
                                <Link to=""> Get your Website</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-center-navigate-panel">
                <Link to="">Design</Link>
                <Link to="">Develop</Link>
                <Link to="">Code</Link>
                <Link to="">Bug</Link>
            </div>
            <div className="home-center-2-panel">
                <div className="home-center-2-panel-left">
                    <p>The IT Industry moves fast</p>
                    <h1>Relax while we go to work for you.</h1>
                    <p>Buying and selling can seem complex, especially amidst the fast-paced Central Texas housing market. We're here to shield you from undue stress, expertly negotiate on your behalf, and earn your trust at each interaction. In short, let us do the heavy-lifting. We're here to work.</p>
                    <Link to="">Explore Industry</Link>
                </div>
                <div className="home-center-2-panel-right">
                    <img src="./images/backgroundHome.webp" alt="" />
                </div>
            </div>
            <div className="profilePhoto-intro-mainHome">
                <div className="profilePhoto-intro-mainHome-left">
                    <img src="./images/trilokpro.jpg" alt="" />
                </div>
                <div className="mainCenter-right-align-intro">
                    <div className="profilePhoto-intro-mainHome-right">
                        <p>MEET  TRILOK</p>
                        <h1>Think of us as your Information Technology advantage.</h1>
                        <h3>Trilok is working as the Intern and also passionate to learn more things about various programming languages. I have done with few multiple projects and also keen to contribute my skills in the upcoming web Journey</h3>
                        <Link to="">More About Us</Link>
                    </div>
                </div>
            </div>
            <div className="home-work-beginBox">
                <div className="home-work-beginBox-alignFlex">
                    <p>Ready to begin?</p>
                    <h2>We work differently at Global Living. We’re strategists, experts, and technology professionals. To learn more about our process and how to work with us, get in touch. You’re one click away from your best move yet.</h2>
                    <Link to="/contact">Contact Us</Link>
                </div>
            </div>
            <div className="homeMain-content-social-panel">
                <div className="main-home-contact-getSocial">
                    <h2>Get Social</h2>
                    <Link to=""><img src="./images/facebook.svg" alt="" /></Link>
                    <Link to=""><img src="./images/twitter.svg" alt="" /></Link>
                    <Link to=""><img src="./images/you-tube.svg" alt="" /></Link>
                    <Link to=""><img src="./images/instagram.svg" alt="" /></Link>
                    <Link to=""><img src="./images/linkdin.svg" alt="" /></Link>
                </div>
                <div className="main-home-contact-touch">
                    <h2>STAY IN TOUCH</h2>
                    <p>ittiku3@gmail.com</p>
                    <h2>8058436268</h2>
                </div></div>
            <Footer />
        </>
    )
}
