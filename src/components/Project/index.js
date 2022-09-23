import React from 'react';


function Project({project}){
    const {title, description, source, ref, alt} = project
    return (
        <article class="project">
        <a href={ref} target="_blank" rel="noreferrer">
        <img src={require(`../../assets/images/${source}`)} alt={alt} />
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
