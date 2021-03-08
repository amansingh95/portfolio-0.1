import React from 'react'
import Card from './Card';

const Projects = () => {
    return (
        <>
            <h4>Here is some project's of my <a rel="noreferrer" target="_blank" href="https://www.github.com/bevilaquaBruno">github profile</a></h4>
          <div className="md-6 sm-12 col">
            <Card
              headerText="start message"
              cardTitle="Project's Title"
              cardSubtitle="Short description about the tecnologies used"
              cardText="final message"
              githubUrl="https://github.com/BevilaquaBruno"
            />
          </div>
          <div className="md-6 sm-12 col">
            <Card
              headerText="Lorem ipsum dolor sit amet"
              cardTitle="Lorem ipsum dolor sit amet"
              cardSubtitle="Lorem ipsum dolor sit amet"
              cardText="Lorem ipsum dolor sit amet"
              githubUrl="https://github.com/BevilaquaBruno/"
            />
          </div>
        </>
    )
}

export default Projects
