import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

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
                        <p>Code with Design: Shaping Visually Engaging Web Experiences</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="meter" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="meter" />
                                <h5>Mobile Responsive Design</h5>
                            </div>
                           <div className="item">
                                <img src={meter2} alt="meter" />
                                <h5>MERN</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="meter" />
                                <h5>ReactJS</h5>
                            </div>
                         <div className="item">
                                <img src={meter2} alt="meter" />
                                <h5>NextJS</h5>
                            </div>
                         <div className="item">
                                <img src={meter2} alt="meter" />
                                <h5>TailwindCSS</h5>
                            </div>
                         <div className="item">
                                <img src={meter2} alt="meter" />
                                <h5>Express</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="meter" />
                                <h5>HTML5</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="meter" />
                                <h5>CSS3</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="meter" />
                                <h5>SASS</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="meter" />
                                <h5>JAVASCRIPT</h5>
                            </div>
                         <div className="item">
                                <img src={meter2} alt="meter" />
                                <h5>TYPESCRIPT</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="meter" />
                                <h5>BOOTSTRAP5</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="meter" />
                                <h5>JQUERY</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="meter" />
                                <h5>NODEJS</h5>
                            </div>
                           <div className="item">
                                <img src={meter2} alt="meter" />
                                <h5>MONGODB</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="meter" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="meter" />
                                <h5>RESTFUL API</h5>
                            </div>
                           <div className="item">
                                <img src={meter1} alt="meter" />
                                <h5>GRAPHQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="meter" />
                                <h5>GIT VERSION CONTROL</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="meter" />
                                <h5>GITHUB</h5>
                            </div>
                          <div className="item">
                                <img src={meter2} alt="meter" />
                                <h5>VERCEL</h5>
                            </div>
                          <div className="item">
                                <img src={meter2} alt="meter" />
                                <h5>NETLIFY</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="meter" />
                                <h5>SEO</h5>
                            </div>                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="background" />
    </section>
  )
}
