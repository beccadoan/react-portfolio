import React from 'react';
import Project from '../Project'

function Portfolio(){
    const projects = [
    {
        'title': 'Womens Tech Forum',
        'description': 'A forum where women in tech can go to network and ask questions',
        'source': 'womens-tech-forum.png'
    },
    {
        'title': 'Tunes and Tribunes',
        'description': 'A website to find the latest on your favorite artists',
        'source': 'mainpageartists.png'
    },
    {
        'title': 'Run Buddy',
        'description': 'A front end website to show off your trainers',
        'source': 'run-buddy.png'
    },
    {
        'title': 'Hey End',
        'description': 'description',
        'source': 'womens-tech-forum.png'
    },
    {
        'title': 'Hey End',
        'description': 'description',
        'source': 'womens-tech-forum.png'
    },
    {
        'title': 'Hey End',
        'description': 'description',
        'source': 'womens-tech-forum.png'
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
