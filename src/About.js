import React from 'react';
import mypic from './mypic.jpg';

function About() {
  return (
    <section id="about">
      <img src={mypic} alt="Manshak Daniel Simon" />
      <h2>About Me</h2>
      <p>
        Hello! I’m <strong>Manshak Daniel Simon</strong>, a passionate developer with a strong interest in building
        sleek, functional web applications. I love turning creative ideas into real-world digital experiences.
      </p>
      <p>
        I'm experienced in modern technologies like <strong>React</strong>, <strong>CSS</strong>, and more. Let’s build something great together!
      </p>
    </section>
  );
}

export default About;