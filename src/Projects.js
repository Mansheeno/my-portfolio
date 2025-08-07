import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Portfolio App',
      description: 'A personal portfolio app built with React to showcase my skills and projects.',
    },
    {
      id: 2,
      title: 'Robofriends App',
      description: 'A React app that displays a list of robots with their names and emails.',
    },
    {
      id: 3,
      title: 'Cloud Storage Website',
      description: 'A cloud storage platform UI with file uploads, user authentication, and real-time syncing.',
    },
    {
      id: 4,
      title: 'E-Commerce Platform',
      description: 'An e-commerce web app featuring product listings, cart functionality, and secure checkout.',
    },
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;