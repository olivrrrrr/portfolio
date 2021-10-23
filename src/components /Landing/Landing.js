import React, { useEffect} from 'react'
import Typical from 'react-typical'
import { Link } from 'react-scroll'
import Particles from 'react-particles-js'
import './Landing.css'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { FaLinkedin, FaGithub} from "react-icons/fa";

function Landing() {

      useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
       <header>
             <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }} />
            <div className="landing">
            <h2 className="landing__name" data-aos='fade-in'>OLIVER EKWALLA |  
            <a
            href="https://uk.linkedin.com/in/oliver-ekwalla-148227173"
            target="blank"
            aria-label="LinkedIn"
            >
              <FaLinkedin className={`linkedin-social-link`} /> 
            </a>
        
            <a
            href="https://github.com/olivrrrrr"
            target="blank"
            aria-label="Github"
            ><FaGithub className={`github-social-link`} />
            </a>
          </h2>
            <div className="landing__title">
                 <Typical
                steps={['Full Stack Software Engineer', 500]}
                loop={Infinity}
                wrapper="p"
            />
            </div>
            <Link to='about' smooth={true} duration={1000}><button className="button button__colour"> Know More</button></Link>
        </div>
    
       </header> 
    )
}

export default Landing
