import React from 'react';
import portfolioImg from './my-portfolio.png';
import robofriendsImg from './robofriends.png';
import cloudStorageImg from './cloudstorage.png';
import ecommerceImg from './ecommerce.png';
import weatherImg from './weather.png';
import recipeImg from './recipe.png';
import netflixImg from './netflix.png';
import ecommercesImg from './ecommerces.png';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Weather App – Real-Time Forecasts',
      description: 'A sleek and responsive weather application that provides up-to-date weather information for any city worldwide. Users can search by location to view current temperature, humidity, wind speed, and detailed weather conditions, all powered by a reliable weather API.',
      image: weatherImg,
      link: 'https://weather-app-phi-seven-48.vercel.app/',
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
    {
      id: 5,
      title: 'Portfolio App',
      description: 'A personal portfolio app built with React to showcase my skills and projects.',
      image: portfolioImg,
      link: '#',
    }
    ,
    {
      id: 6,
      title: 'Recipe App',
      description: 'Recipe App is a responsive web application that lets users search and explore recipes from around the world. It connects to a free recipe API (TheMealDB) to fetch real-time meal data including ingredients, instructions, and images.',
      image: recipeImg,
      link: 'https://recipe-app-ecru-beta.vercel.app/',
    },
    {
      id: 7,
      title: 'Netflix Clone App',
      description: 'Netflix Clone is a front-end replica of the Netflix platform built with React and CSS. It mimics the modern streaming UI with a dynamic movie/TV show grid, banners, and hover effects. Data is fetched from The Movie Database (TMDb) API to display trending titles and details.',
      image: netflixImg,
      link: 'https://netflix-clone-app-gamma.vercel.app/',
    },
{
  id: 8,
  title: 'E-Commerce Platform',
  description: 'An e-commerce web app featuring product listings, cart functionality, and secure checkout.',
  image: ecommercesImg,
  link: 'https://e-commerce-app-opal-six.vercel.app/', // ✅ updated with your deployed e-commerce link
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
