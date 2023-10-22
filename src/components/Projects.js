// projects.js

import React from 'react';


const Projects = () => {
  const projects = [
    {
      title: "Drowsiness Detection Glasses using Arduino",
      description: "The glasses are equipped with an eye blink sensor that detects the driver's level of drowsiness by monitoring their eye blinks.",
    },
    {
      title: "Muvitaab Software Solutions Website",
      description: "Designed a website for a startup software company with HTML, CSS, Bootstrap, and JavaScript.",
      link: "https://www.muvitaab.com/",
    },
    {
      title: "Research Paper on Bank Customer Retention",
      description: "Used Random Forest Classifier for customer retention analysis with 99% accuracy. Also, analyzed data using Power BI.",
    },
    {
      title: "Netflix Clone",
      description: "Designed a Netflix homepage using HTML and CSS.",
    },
  ];

  return (
    <div>
      <h1>My Projects</h1> <br></br>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3><br></br>
          <p>{project.description}</p>
          {project.link && <a href={project.link}>Visit Website</a>}
        </div>
      ))}
    </div>
  );
};

export default Projects;
