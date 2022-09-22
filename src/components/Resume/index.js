
import resume from '../../assets/documents/resume.pdf'
import React from 'react';


function Resume() {
    return (
        <section id="resume">
            <div class="resume">
                <span className="download">
                    Download my <a href={resume} download>resume</a> here
                </span>
                <h3>Here are some technologies I am well versed in</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Node JS</li>
                    <li>SQL</li>
                    <li>Python</li>
                    <li>Docker</li>
                    <li>Jenkins</li>
                    <li>Express</li>
                </ul>
            </div>
        </section>
    )
}

export default Resume;