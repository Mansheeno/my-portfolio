import React from 'react';
import portfolioImg from './my-portfolio.png';
import robofriendsImg from './robofriends.png';
import cloudStorageImg from './cloudstorage.png';
import ecommerceImg from './ecommerce.png';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Portfolio App',
      description: 'A personal portfolio app built with React to showcase my skills and projects.',
      image: portfolioImg,
      link: 'https://my-portfolio-5nz3.vercel.app/',
    },
    {
      id: 2,
      title: 'Robofriends App',
      description: 'A React app that displays a list of robots with their names and emails.',
      image: robofriendsImg,
      link: 'https://robofriends-navy.vercel.app/',
    },
    {
      id: 3,
      title: 'Cloud Storage Website',
      description: 'A cloud storage platform UI with file uploads, user authentication, and real-time syncing.',
      image: cloudStorageImg,
      link: 'https://project2-zeta-black.vercel.app/',
    },
    {
      id: 4,
      title: 'E-Commerce Platform',
      description: 'An e-commerce web app featuring product listings, cart functionality, and secure checkout.',
      image: ecommerceImg,
      link: 'https://student-project-sand.vercel.app/',
    },
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: '100%',
                height: '160px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '12px',
              }}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block', marginTop: '8px', color: '#2563eb', fontWeight: 'bold' }}
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
