import React from 'react';
import './Header.scss';
import { NAV_LINKS } from '../../data';
import asLogoWhite from '../../assets/as-logo.png';

export default function Header () {
    window.addEventListener('scroll', (event) => {
        const nav = document.querySelector('#navscroll');
        if(window.scrollY <= 250) {
            nav.className = ''; 
        } 
        else { 
            let y = document.getElementById('navscroll'); 
            nav.className = 'scroll';
        }
    })
 
    return (
        <header>
            <nav id="navscroll">
                <div className="nav-container">
                    <div className="nav-logo">
                        <a href="https://atlantisscuba.com/"><img src={asLogoWhite} alt="Atlantis Scuba"/></a>
                    </div>
                    <div className="nav-links">
                        {NAV_LINKS.map((link) => <a href={link.url} key={link.copy}>{link.copy}</a>)}
                    </div>
                </div>
            </nav>
            <nav className="mobile-nav">
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="mobile-nav-logo">
                        <a href="https://atlantisscuba.com/"><img src={asLogoWhite} alt="Atlantis Scuba"/></a>
                    </div>
                    <ul id="menu">
                        <li className="logo-mb-nav"><a href="https://atlantisscuba.com/"><img src={asLogoWhite}  alt="Atlantis Scuba"/></a></li>
                        {NAV_LINKS.map((link) => <li key={link.copy}><a href={link.url}><div className="arrow"></div>{link.copy}</a></li>)}
                    </ul>
            </div>
        </nav>
    </header>
    )
}