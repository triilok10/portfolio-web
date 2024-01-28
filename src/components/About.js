import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function About() {
    return (
        <>
            <Header />
            <div className="about-panel-mainBgimg">
                <div className="about-panel-mainBgimg-align">
                    <h1 id='about-panel-mainBgimg-align-left'>Developer</h1>
                    <img src="./images/aboutBg.jpg" alt="" />
                    <h1 id='about-panel-mainBgimg-align-right'>Coder</h1>
                </div>
            </div>
            <div className="about-panel-techPassionate-fx">
                <div className="about-panel-techPassionate-fx-left">
                    <h1>I'm passionate to my WebWork, my Technology</h1>
                    <p>I do enjoy learning new things and try to overcome new challenges while analyzing how I improved through them. I constantly try to improve myself to become more toward my Journey and Goal. I always love web content which suitable my Web Profile.</p>
                </div>
                <div className="about-panel-techPassionate-fx-right"><img src="./images/cardTrilok.png" alt="" /></div>
            </div>
            <Footer />
        </>
    )
}
