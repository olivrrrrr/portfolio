import React, {useEffect} from 'react'
import './About.css'
import {techStack}  from "./TechStack"
import { v4 as uuidv4 } from "uuid";
import Aos from 'aos'
import 'aos/dist/aos.css'; 

function About() {

     useEffect(() => {
        Aos.init({duration: 2000});
    }, []);


    return (
        
        <div className="about">
            
            <h2 className="aboutme__title" data-aos='fade-in'>[About Me]</h2>
            <div className="about__text">
    
                <div className="about__text__intro" data-aos='fade-right'> 
                
                    <p>
                        I am a London based full-stack solftware developer, looking for my first graduate/junior role. 
                        
                        Whilst undertaking a degree in Chemistry, I self-taught HTML, CSS, JavaScript & Python. With Bright Network Technology Academy (BNTA) Bootcamp, I have continued on this journey learning both frontend and backend technologies.
                    
                        I have gained extensive experience in working collaboratively, problem-solving and public speaking through both my degree and the BNTA Bootcamp.
                    
                        I enjoy building software, contributing to the open source community, and continuously learning.
                    </p>
        
                </div>

                <div className="about__text__techstack" data-aos='fade-left'>
                    <p>I have experience with the following technologies:</p>
                        <div className="about__text__techstack__icons">
                                {techStack.map(tech =>{
                                    return (
                                        <div key={uuidv4()} className="techicon">
                                        <tech.icon className="techicon__logo"/>
                                        <p className="techicon__name">{tech.name}</p>
                                        </div>
                        )
                    })}
                        </div>
                </div>
            </div>
                   
            <a href="https://drive.google.com/file/d/1cBx7VYoxWk5k-_TyRbfmY08kcpZK9QS9/view" target="__blank"><button className="resume resume__green">Resume</button></a>
        </div>
    ); 
}

export default About
