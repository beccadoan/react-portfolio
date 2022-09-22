import React from 'react';

function Nav({currentCategory, setCurrentCategory}){
    return (
        <header>
        <h1>
            <span><a href="/">Becca's Portfolio</a></span>
        </h1>
        <nav>
            <ul>
                <li>
                    <span 
                    className={`${currentCategory === 'About' && 'nav-active'}`}
                    onClick={()=>setCurrentCategory('About')}>About Me</span>
                </li>
                <li>
                    <span 
                    className={`${currentCategory === 'Portfolio' && 'nav-active'}`}
                    onClick={()=>setCurrentCategory('Portfolio')}>
                    Portfolio</span>
                </li>
                <li>
                    <span 
                    className={`${currentCategory === 'Contact' && 'nav-active'}`}
                    onClick={()=>setCurrentCategory('Contact')}>
                    Contact Me
                    </span>
                </li>
                <li>
                    <span 
                    className={`${currentCategory === 'Resume' && 'nav-active'}`}
                    onClick={()=>setCurrentCategory('Resume')}>
                        Resume</span>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default Nav;
