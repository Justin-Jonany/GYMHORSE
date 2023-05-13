import React from 'react'
import './Footer.css'
import Github from "../../assets/github.png"
import Instagram from "../../assets/instagram.png"
import LinkedIn from "../../assets/linkedin.png"
import Logo from "../../assets/logo.svg"
function Footer() {
    return (
        <div className="Footer-container">
            <hr />
            <div className="footer">
                <div className="social-links">
                    <a href='https://github.com/Justin-Jonany'>
                        <img src={Github} alt="" />
                    </a>
                    <a href='https://www.instagram.com/instagram/'>
                        <img src={Instagram} alt="" />
                    </a>
                    <a href='https://www.linkedin.com/in/justinjonany/'>
                        <img src={LinkedIn} alt="" />
                    </a>

                </div>
                <div className='logo-f'>
                    <img src={Logo} alt="" />
                </div>
            </div>

            <div className="blur blur-f-1"></div>
            <div className="blur blur-f-2"></div>

        </div>

    )
}

export default Footer