import React from 'react';


function Project({project}){
    const {title, description, source} = project
    return (
        <article class="project">
        <a href="https://en.wikipedia.org/wiki/Front-end_web_development" target="_blank" rel="noreferrer">
        <img src={require(`../../assets/images/${source}`)} alt="current category" />
        </a>
        <div class="project-bio">
            <h3 class="">{title}</h3>
            <p>
                {description}
            </p>
        </div>
    </article>
    )
}

export default Project;
