import {Github, Globe} from "react-bootstrap-icons";
import {Tilt} from 'react-tilt'

const Projects = () => {

    const defaultOptions = {
        reverse: false,  // reverse the tilt direction
        max: 35,     // max tilt rotation (degrees)
        perspective: 3000,   // Transform perspective, the lower, the more extreme the tilt gets.
        scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,    // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }

    const projectList = [
        {
            name: 'E-Commerce',
            image: '/project-images/vuejs-e-commerce.png',
            doneWith: 'Vue.js & Bootstrap',
            desc: 'Developed a straightforward E-commerce platform utilizing Vue.js and Bootstrap, prioritizing ease of use and functionality. Designed and implemented essential features to ensure a smooth online shopping experience.',
            githubLink: 'https://github.com/Uvejsii/E-Commerce-with-Vue.js',
            websiteLink: 'https://vue-js-e-commerce.netlify.app/'
        },
        {
            name: 'Earth Lens',
            image: '/project-images/vuejs-earth-lens.png',
            doneWith: 'Vue.js & Bootstrap',
            desc: 'Built a Vue.js and Bootstrap website with continent-based filtering and detailed country profiles, showcasing skills in web development, data management, and smooth user interface and experience',
            githubLink: 'https://github.com/Uvejsii/REST-Countries-API-with-color-theme-switcher',
            websiteLink: 'https://countries-api-with-theme-switcher.netlify.app/'
        },
        {
            name: 'E-Shopping',
            image: '/project-images/react-e-shopping.png',
            doneWith: 'React.js & Bootstrap',
            desc: 'Created an easy-to-use e-shopping platform with React.js and Bootstrap. Key features include product listings, a shopping cart, and order management, all designed for a smooth and enjoyable experience',
            githubLink: 'https://github.com/Uvejsii/e-shopping-with-react',
            websiteLink: 'https://e-shopping-with-react.netlify.app/'
        },
        {
            name: 'Online Bookstore',
            image: '/project-images/fullstack-bookstore.png',
            doneWith: 'Vue.js, Bootstrap, C#, MS SQL',
            desc: 'Built a FullStack Bookstore with Vue.js, Bootstrap, .NET Core, and MS SQL Server. Programmed functional CRUD endpoints and implemented secure RESTful APIs with JWT for smooth frontend-backend interaction',
            githubLink: 'https://github.com/Uvejsii/Book-Store-API',
            websiteLink: ''
        },
    ]

    return (
        <div className="projects-container my-5" id="projects">
            <h1 className="text-light text-center mb-5">Some Of My Projects</h1>
            <div className="row g-5 d-flex justify-content-between">
                {projectList.map((project) => (
                    <div key={project.websiteLink} className="col-xl-6 mb-3">
                        <Tilt options={defaultOptions}>
                            <div className="project-card w-100 rounded-5">
                                <figure className="w-100 rounded-3">
                                    <a href={project.websiteLink} target="_blank">
                                        <img src={project.image} alt="project" className="w-100 h-100 bg-light"/>
                                    </a>
                                </figure>
                                <div className="project-details text-light mt-3">
                                    <div className="project-name">
                                        <h4 className="fw-bold"><span>{project.name}</span></h4>
                                    </div>
                                    <div className="project-desc mb-2">
                                        <small>{project.desc}</small>
                                    </div>
                                    <div className="project-technologies">
                                        <h5>Done With: <span className="text-light fw-bold">{project.doneWith}</span>
                                        </h5>
                                    </div>
                                    <div className="project-links">
                                        <p className="m-0">Github Repository
                                            <span className="ms-2">
                                        <a href={project.githubLink} target="_blank"
                                           className="text-light project-links-icons fs-5"><Github/></a>
                                    </span>
                                        </p>
                                        <p className="m-0">Live Website
                                            <span className="ms-2">
                                    {!project.websiteLink ? (<small className="text-light">-</small>) : (
                                        <a href={project.websiteLink} target="_blank"
                                           className="text-light project-links-icons fs-5"><Globe/>
                                        </a>
                                    )}
                                    </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Tilt>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Projects;