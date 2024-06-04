import SocialMedia from "./SocialMedia.jsx";
import ViewCv from "./ViewCv.jsx";

const Footer = () => {
    return (
        <footer className="d-flex justify-content-center align-items-center gap-5 my-5">
            <div className="left-footer border-end border-secondary pe-5">
                <img src="/logo.jpg" alt="logo" className="logo rounded rounded-4 d-flex mx-auto"/>
                <h3 className="text-light mt-3">Uvejs Ahmeti</h3>
            </div>
            <div className="right-footer d-flex justify-content-between">
                <SocialMedia/>
                <ViewCv/>
            </div>
        </footer>
    )
}
export default Footer;