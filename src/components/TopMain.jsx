import {PersonRaisedHand} from "react-bootstrap-icons"
import SocialMedia from "./SocialMedia.jsx";
import ViewCv from "./ViewCv.jsx";

const TopMain = () => {
    return (
        <div className="top-main-wrapper row mb-5" id="top" data-section="true">
            <div className="txt-container col-xl-6 col-lg-7 mt-5">
                <h4 className="hello-txt m-0 d-flex mt-5">HI <PersonRaisedHand className="hello-txt"/></h4>
                <div className="presentation-txt">
                    <h1 className="main-txt text-light">
                        I’m<span className="name-txt"> Uvejs Ahmeti</span> a Frontend Developer
                    </h1>
                </div>
                <div className="details-txt mt-5">
                    <h6>
                        I’m a second-year Computer Science student at AAB College. I use front-end development as a dynamic canvas to enhance user experiences, seamlessly guiding each interaction for better usability and engagement.
                    </h6>
                </div>
                <div className="personal-container d-flex justify-content-between">
                    <div className="social-media-wrapper mt-5">
                        <SocialMedia/>
                    </div>
                    <div className="cv-wrapper mt-5">
                        <ViewCv/>
                    </div>
                </div>
            </div>
            <div className="image-container col-xl-6 col-lg-5 my-auto">
            <img src="/logos/person-coding-3D.webp" alt="person" className="person-image w-100"/>
            </div>
        </div>
    )
}
export default TopMain;