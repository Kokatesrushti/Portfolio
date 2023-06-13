import html from "../assets/img/html.svg";
import css from "../assets/img/css.svg";
import js from "../assets/img/js.svg";
import react from '../assets/img/react.svg';
import node from '../assets/img/node.svg';
import express from '../assets/img/express.svg';
import flutter from '../assets/img/flutter.svg';
import django from '../assets/img/django.svg';
import python from '../assets/img/python.svg';
import mysql from '../assets/img/mysql.svg';
import java from '../assets/img/java.svg';
import cplus from "../assets/img/cplus.svg";
import tailwind from "../assets/img/tailwind.svg";
import mongodb from "../assets/img/mongodb.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/skillsbg.jpg";


const Skills = () => {

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
                    <p>This section contains programming languages, software frameworks, design tools, and project management approaches that I have utilised to demonstrate my abilities and experience.</p>
                    <Carousel responsive={responsive} infinite={true} 
                autoPlay={true} autoPlaySpeed={1200} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                            <img src={html} alt="Image1" />
                            <h3>Html</h3>
                        </div>
                        <div className="item">
                            <img src={css} alt="Image2" />
                            <h3>Css</h3>
                        </div>
                        <div className="item">
                            <img src={js} alt="Image3" />
                            <h3>Javascript</h3>
                        </div>
                        <div className="item">
                            <img src={node} alt="Image5" />
                            <h3>Node Js</h3>
                        </div>
                        <div className="item">
                            <img src={express} alt="Image5" />
                            <h3>Express Js</h3>
                        </div>
                        <div className="item">
                            <img src={react} alt="Image5" />
                            <h3>React Js</h3>
                        </div>
                        <div className="item">
                            <img src={flutter} alt="Image5" />
                            <h3>Flutter</h3>
                        </div>
                        <div className="item">
                            <img src={python} alt="Image5" />
                            <h3>Python</h3>
                        </div>
                        <div className="item">
                            <img src={django} alt="Image5" />
                            <h3>Django</h3>
                        </div>
                        <div className="item">
                            <img src={mysql} alt="Image5" />
                            <h3>Mysql</h3>
                        </div>
                        <div className="item">
                            <img src={mongodb} alt="Image5" />
                            <h3>MongoDB</h3>
                        </div>
                        <div className="item">
                            <img src={java} alt="Image5" />
                            <h3>Java</h3>
                        </div>
                        <div className="item">
                            <img src={cplus} alt="Image5" />
                            <h3>C++</h3>
                        </div>
                        <div className="item">
                            <img src={tailwind} alt="Image5" />
                            <h3>Tailwind Css</h3>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    </div>
    <img className="background-image-left" src={colorSharp} alt="Image4" />
</section>
  )
}

export default Skills