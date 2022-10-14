import React from 'react';
import Project from '../Project'

function Portfolio(){
    const projects = [
    {
        'title': 'Womens Tech Forum',
        'description': 'A forum where women in tech can go to network and ask questions',
        'source': 'womens-tech-forum.png',
        'ref': 'https://hidden-brook-20923.herokuapp.com/',
        'alt': "Women's Tech Forum deployed application"
    },
    {
        'title': 'Tunes and Tribunes',
        'description': 'A website to find the latest on your favorite artists',
        'source': 'mainpageartists.png',
        'ref': 'https://beccadoan.github.io/tunes_and_tribunes/',
        'alt': "Tunes and Tribunes deployed application"
    },
    {
        'title': 'Run Buddy',
        'description': 'A front end website to show off your trainers',
        'source': 'run-buddy.png',
        'ref': 'https://beccadoan.github.io/run-buddy/',
        'alt': "Run Buddy deployed application"
    },
    {
        'title': 'My Portfolio',
        'description': 'My personal portfolio showcasing my web dev skills',
        'source': 'my-portfolio.png',
        'ref': 'https://beccadoan.github.io/react-portfolio/',
        'alt': "Becca's Portfolio deployed application"
    },
    {
        'title': 'Photo Port',
        'description': "Website showcasing a photographer's portfolio",
        'source': 'photo-port.png',
        'ref': 'https://beccadoan.github.io/photo-port/',
        'alt': "Photo Port deployed application"
    },
    {
        'title': 'NowYouKnow',
        'description': 'A game to play with your friends',
        'source': 'NowYouKnow.png',
        'ref': 'https://arcane-cliffs-23763.herokuapp.com/',
        'alt': "NowYouKnow deployed application"
    }
]
    return (
        <section id="my-projects">
        <div class="content-header flex-row">
            <h2 class="">My Projects</h2>
        </div>
        <div class="projects">
            {projects.map((project) => <Project project={project}/>)}
        </div>
    </section>
    )
}

export default Portfolio;
