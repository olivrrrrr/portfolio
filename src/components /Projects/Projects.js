import React, {useEffect} from 'react'
import './Projects.css'
import Aos from 'aos'
import 'aos/dist/aos.css';


function Projects() {

     useEffect(() => {
        Aos.init({duration: 2000});
    }, []);


    const projects = [
          {
            id: 1, 
            projectTitle:'Portfolio', 
            description:'Portfolio made using React and CSS, demonstrating my frontend capability and previous projects.', 
            source: `https://github.com/olivrrrrr/portfolio`, 
            live:``, 
            img:`${process.env.PUBLIC_URL}/assets/Portfolio.png`
        }, 
        {
            id: 2, 
            projectTitle:'Book Tracker Application', 
            description:'Used object-orientated JavaScript to make an interactive book tracker application. Incorporated the modular design pattern, IIFEs, the single responsibility principle and local storage.', 
            source: `https://github.com/olivrrrrr/Book-tracker`, 
            live:`https://olivrrrrr.github.io/Book-tracker/`, 
            img:`${process.env.PUBLIC_URL}/assets/BookTracker.png`
        },
        {
            id: 3, 
            projectTitle:'ChemDataExtractor', 
            description:'For my final year masters project, I worked in Python to automate the extraction of chiral information from scientific literature by adding a feature to an open-source Natural Language Processing (NLP) project. ', 
            source: `https://github.com/olivrrrrr/ChemDataExtractor`, 
            live:`https://github.com/olivrrrrr/ChemDataExtractor`, 
            img:`${process.env.PUBLIC_URL}/assets/ChemDataExtractor.png`
        }, 
    ]
        return(
            <div className="featured-project">
                <h2 className="featured-project-title">[Featured Projects]</h2>
                {(projects.map((project)=>{
                    const {id, projectTitle, description,source, live, img} = project
                
                    return(  
                        
                        <div className="project" data-aos='fade-right' key={id}>
                            <div className="project__info">
                                <h2 className="project-title">{projectTitle}</h2>
                                <p className="project-description">{description}</p>
                                <a href={live}> <button className="see-live see-live__green">See Live</button></a>
                                <a href={source}><button className="source-code source-code__green">Source Code</button></a> 
                            </div>
                            <div className="project__photo" >
                                <img data-aos='fade-right' src={img} alt={projectTitle} />
                            </div>
                        </div>
                        
                        )})
                        )}
            </div>
        )
}

export default Projects
