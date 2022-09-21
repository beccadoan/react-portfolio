import React from 'react';
import headshot from '../../assets/images/headshot.jpg'

function About(){
    return (
        <section id="about-me">
        <div class="content-header flex-row">
            <h2 class="">About Me</h2>
        </div>
        <div class="intro-container">
            <div class="">
                <img src={headshot} alt="" class="intro-img"/>
            </div> 
            <div class="flex-row about-me">
                <p>
                    Hi! I'm Becca. I graduated in 2017 with a degree in Electrical Engineering from the University of North Florida. I soon after moved to a small town in Kansas and became a Controls Engineer, using LabVIEW and PLCs to control automated machine processes. I decided that I wanted to make a career change to web development, and moved to Austin, TX to pursue a position working on web applications. I love checking out local coffee shops, going on walks, playing guitar, and being outdoors and active!
                </p>
            </div>
        </div>
    </section>
    )
}

export default About;
