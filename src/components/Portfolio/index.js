import React from 'react';
import Project from '../Project'

function Portfolio(){
    const projects = [
    {
        'title': 'Front End',
        'description': 'description',
        'source': 'womens-tech-forum.png'
    },
    {
        'title': 'Back End',
        'description': 'description',
        'source': 'womens-tech-forum.png'
    },
    {
        'title': 'Side End',
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
