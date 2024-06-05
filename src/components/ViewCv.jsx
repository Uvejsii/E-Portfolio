/*eslint-disable*/
import {PostcardFill} from "react-bootstrap-icons";

const ViewCv = () => {
    return (
        <div className="view-cv-wrapper me-4 pe-3">
            <h4 className="text-light">View CV</h4>
            <div className="cv-container mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <PostcardFill className="text-light fs-3"/>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-body">
                            <embed
                                src="/CV/Uvejs's%20Resume%20Main.pdf"
                                type="application/pdf"
                                frameBorder="0"
                                width="505px"
                                height="750px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ViewCv;