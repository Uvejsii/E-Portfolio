/*eslint-disable*/
import {PostcardFill} from "react-bootstrap-icons";

const ViewCv = () => {
    return (
        <div className="view-cv-wrapper me-4 pe-3">
            <h4 className="text-light">View CV</h4>
            <a href="https://drive.google.com/file/d/17LqR2EwGw4NGwPSsqTogx-hQdzswC8J5/view?usp=drive_link"
               target="_blank" rel="noopener noreferrer">
                <div className="cv-container mt-3">
                    <PostcardFill className="text-light fs-3"/>
                </div>
            </a>
</div>
)
}
export default ViewCv;