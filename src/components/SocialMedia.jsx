import {Linkedin, Github} from "react-bootstrap-icons";

const SocialMedia = () => {
    return (
        <div className="social-medias-wrapper">
            <h4 className="text-light">Connect With Me</h4>
            <ul className="socials d-flex text-light list-unstyled gap-3 mt-3">
                <li>
                    <a href="https://www.linkedin.com/in/uvejs-ahmeti-3565b2256/" target="_blank" className="text-light fs-3"><Linkedin/></a>
                </li>
                <li>
                    <a href="https://github.com/Uvejsii" target="_blank" className="text-light fs-3"><Github/></a>
                </li>
                <li>
                    <a href="https://www.frontendmentor.io/profile/Uvejsii" target="_blank">
                        <img src="/logos/frontendMentor-logo.svg" alt="frontend-mentor logo"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default SocialMedia;