import React from 'react'
import ME from '../assets/img/me2.png'

const About = () => {
  return (
    <section id='about'>
      <div className='headline'>
      <h2>About Me</h2>
      </div>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card1">
              <h1>Hi, I'm Matias Duro</h1>
              <h2>A Fullstack Web Developer</h2>
              <h2>Located in Buenos Aires, Argentina</h2>
            </article>
          </div>
          <p>I considerd myself as someone who doesnt learn in the first try, but goes over and over until I do, and as one of my best teachers said once. Becoming a developer is not a matter of how fast you learn how to code, its about resistance, how you can manage the frustation when something doesnt work, and find a solution.</p>
          <p>A dynamic and ambitious person, passionate about learning more everyday, searching always for things to challenge myself and never stop growing.</p>
          <p>The next big things I would like to learn are UX/UI Design and App Development</p>
          </div>
      </div>
    </section>
  )
}

export default About