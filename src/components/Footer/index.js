import React from 'react';
import linkedin from '../../assets/images/linkedin.png'
import github from '../../assets/images/github.png'

function Footer(){
    return (
    <footer>
            <h2>Thanks for visiting!</h2>
            <ul>
                <li>
                    <a href="https://github.com/beccadoan" target="_blank">
                        <img src={github} alt="github icon" className="small-icon"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/rebecca-doan-249122159/" target="_blank">
                        <img src={linkedin} alt="linkedin icon" className="small-icon"/>
                    </a>
                </li>
            </ul>   
    </footer>
    )
}

export default Footer;
