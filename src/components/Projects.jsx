import {Github, Globe} from "react-bootstrap-icons";
import {Tilt} from 'react-tilt';

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
    };

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
            name: 'Online Food Order',
            image: '/project-images/food_order-logo.jpg',
            doneWith: 'React.js, Bootstrap, C#, MS SQL',
            desc: 'Developed a Full Stack Online Food Order with React.js, Redux, .NET Core, and MS SQL Server. Features included smooth browsing, ordering, and admin product management, with secure RESTful API endpoints.',
            githubLink: 'https://github.com/Uvejsii/OnlineFoodOrderAPI.git',
            websiteLink: 'https://github.com/Uvejsii/OnlineFoodOrderAPI.git'
        },
        {
            name: 'Earth Lens',
            image: '/project-images/vuejs-earth-lens.png',
            doneWith: 'Vue.js & Bootstrap',
            desc: 'Built a Vue.js and Bootstrap website with continent-based filtering and detailed country profiles, showcasing skills in web development, data management, and smooth user interface and experience.',
            githubLink: 'https://github.com/Uvejsii/REST-Countries-API-with-color-theme-switcher',
            websiteLink: 'https://countries-api-with-theme-switcher.netlify.app/'
        },
        {
            name: 'E-Shopping',
            image: '/project-images/react-e-shopping.png',
            doneWith: 'React.js & Bootstrap',
            desc: 'Created an easy-to-use e-shopping platform with React.js and Bootstrap. Key features include product listings, a shopping cart, and order management, all designed for a smooth and enjoyable experience.',
            githubLink: 'https://github.com/Uvejsii/e-shopping-with-react',
            websiteLink: 'https://e-shopping-with-react.netlify.app/'
        },
        {
            name: 'Online Bookstore',
            image: '/project-images/fullstack-bookstore.png',
            doneWith: 'Vue.js, Bootstrap, C#, MS SQL',
            desc: 'Built a FullStack Bookstore with Vue.js, Bootstrap, .NET Core, and MS SQL Server. Programmed functional CRUD endpoints and implemented secure RESTful APIs with JWT for smooth frontend-backend interaction.',
            githubLink: 'https://github.com/Uvejsii/Book-Store-API',
            websiteLink: ''
        },
    ];

    return (
        <div className="projects-wrapper my-5" id="projects" data-section="true">
            <h1 className="text-light text-center mb-5">Some Of My Projects</h1>
            <div className="row g-5 d-flex justify-content-between">
                {projectList.map((project, index) => (
                    <div key={index} className="col-xl-6 col-lg-9 col-sm-12 mx-auto mb-3">
                        <div className="large-screen-project-cards">
                            <Tilt options={defaultOptions}>
                                <div className="project-card w-100 rounded-5">
                                    <figure className="w-100 rounded-3">
                                        {!project.websiteLink ? (
                                            <img src={project.image} alt="project" className="w-100 h-100 bg-light"/>
                                        ) : (
                                            <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
                                                <img src={project.image} alt="project"
                                                     className="w-100 h-100 bg-light"/>
                                            </a>
                                        )}
                                    </figure>
                                    <div className="project-details text-light mt-3">
                                        <div className="project-name">
                                            <h4 className="fw-bold">
                                                {!project.websiteLink ? (<p className="m-0">{project.name}</p>) : (
                                                    <a href={project.websiteLink} target="_blank"
                                                       className="project-name-link text-light text-decoration-none">
                                                        {project.name}
                                                    </a>
                                                )}
                                            </h4>
                                        </div>
                                        <div className="project-desc mb-2">
                                            <small>{project.desc}</small>
                                        </div>
                                        <div className="project-technologies my-4">
                                            <h5>Done With: <span
                                                className="text-light fw-bold">{project.doneWith}</span>
                                            </h5>
                                        </div>
                                        <div className="project-links d-flex gap-3">
                                            {!project.websiteLink ? (
                                                <>
                                                    <a href="https://github.com/Uvejsii/bookstore-frontend.git" target="_blank"
                                                       rel="noopener noreferrer"
                                                       className="text-light project-links-icons fs-5 w-50">
                                                        <div className="btn text-light github-repo-btn w-100">
                                                            Frontend Repository
                                                            <Github className="ms-1"/>
                                                        </div>
                                                    </a>
                                                    <a href={project.githubLink} target="_blank"
                                                       rel="noopener noreferrer"
                                                       className="text-light project-links-icons fs-5 w-50">
                                                        <div className="btn text-light github-repo-btn w-100">
                                                            Backend Repository
                                                            <Github className="ms-1"/>
                                                        </div>
                                                    </a>
                                                </>
                                            ) : (
                                                <>
                                                    <a href={project.githubLink} target="_blank"
                                                       rel="noopener noreferrer"
                                                       className="text-light project-links-icons fs-5 w-50">
                                                        <div className="btn text-light github-repo-btn w-100">
                                                            Github Repository
                                                            <Github className="ms-1"/>
                                                        </div>
                                                    </a>
                                                    <a href={project.websiteLink} target="_blank"
                                                       rel="noopener noreferrer"
                                                       className="text-light project-links-icons fs-5 w-50">
                                                        <div className="btn text-light web-link-btn w-100">
                                                            Website Link
                                                            <Globe className="ms-1"/>
                                                        </div>
                                                    </a>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Tilt>
                        </div>
                        <div className="small-screen-project-cards d-none">
                            <div className="project-card w-100 rounded-5">
                                <figure className="w-100 rounded-3">
                                    {!project.websiteLink ? (
                                        <img src={project.image} alt="project" className="w-100 h-100 bg-light"/>
                                    ) : (
                                        <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
                                            <img src={project.image} alt="project"
                                                 className="w-100 h-100 bg-light"/>
                                        </a>
                                    )}
                                </figure>
                                <div className="project-details text-light mt-3">
                                    <div className="project-name">
                                        <h4 className="fw-bold">
                                            {!project.websiteLink ? (<p className="m-0">{project.name}</p>) : (
                                                <a href={project.websiteLink} target="_blank"
                                                   className="project-name-link text-light text-decoration-none">
                                                    {project.name}
                                                </a>
                                            )}
                                        </h4>
                                    </div>
                                    <div className="project-desc mb-2">
                                        <small>{project.desc}</small>
                                    </div>
                                    <div className="project-technologies my-4">
                                        <h5>Done With: <span
                                            className="text-light fw-bold">{project.doneWith}</span>
                                        </h5>
                                    </div>
                                    <div className="project-links d-flex gap-3">
                                        {!project.websiteLink ? (
                                            <>
                                                <a href="https://github.com/Uvejsii/bookstore-frontend.git"
                                                   target="_blank"
                                                   rel="noopener noreferrer"
                                                   className="text-light project-links-icons fs-5 w-50">
                                                    <div className="btn text-light github-repo-btn w-100">
                                                        Frontend Repository
                                                        <Github className="ms-1"/>
                                                    </div>
                                                </a>
                                                <a href={project.githubLink} target="_blank"
                                                   rel="noopener noreferrer"
                                                   className="text-light project-links-icons fs-5 w-50">
                                                    <div className="btn text-light github-repo-btn w-100">
                                                        Backend Repository
                                                        <Github className="ms-1"/>
                                                    </div>
                                                </a>
                                            </>
                                        ) : (
                                            <>
                                                <a href={project.githubLink} target="_blank"
                                                   rel="noopener noreferrer"
                                                   className="text-light project-links-icons fs-5 w-50">
                                                    <div className="btn text-light github-repo-btn w-100">
                                                        Github Repository
                                                        <Github className="ms-1"/>
                                                    </div>
                                                </a>
                                                <a href={project.websiteLink} target="_blank"
                                                   rel="noopener noreferrer"
                                                   className="text-light project-links-icons fs-5 w-50">
                                                    <div className="btn text-light web-link-btn w-100">
                                                        Website Link
                                                        <Globe className="ms-1"/>
                                                    </div>
                                                </a>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
