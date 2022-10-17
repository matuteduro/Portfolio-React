import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import javascript from "../assets/icons/javascript.png";
import react from "../assets/icons/react.png";
import node from '../assets/icons/node.png';
import redux from '../assets/icons/redux.png';
import sass from '../assets/icons/sass.png';
import bootstrap from '../assets/icons/bootstrap.png';
import mongodb from '../assets/icons/mongodb.png';
import next from '../assets/icons/nextjs.png';
import sql from '../assets/icons/sql.png';
import tailwind from '../assets/icons/tailwind.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={html} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={javascript} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={redux} alt="Image" />
                                <h5>Redux</h5>
                            </div>
                            <div className="item">
                                <img src={next} alt="Image" />
                                <h5>Next JS</h5>
                            </div>
                            <div className="item">
                                <img src={sass} alt="Image" />
                                <h5>Sass</h5>
                            </div>
                            <div className="item">
                                <img src={tailwind} alt="Image" />
                                <h5>Tailwind</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt="Image" />
                                <h5>Node JS</h5>
                            </div>
                            <div className="item">
                                <img src={sql} alt="Image" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={mongodb} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills