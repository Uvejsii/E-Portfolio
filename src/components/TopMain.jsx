import { motion } from 'framer-motion';
import {BoxArrowUpRight, PersonRaisedHand} from 'react-bootstrap-icons';
import SocialMedia from './SocialMedia.jsx';
import ViewCv from './ViewCv.jsx';

const TopMain = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className="top-main-wrapper row mb-5" id="top" data-section="true">
            <div className="txt-container col-xl-6 col-lg-7 mt-5">
                <motion.h4
                    className="hello-txt m-0 d-flex mt-5"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    HI <PersonRaisedHand className="hello-txt" />
                </motion.h4>
                <div className="presentation-txt">
                    <motion.h1
                        className="main-txt text-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        I’m<span className="name-txt"> Uvejs Ahmeti</span> a Software Developer
                    </motion.h1>
                </div>
                <div className="details-txt mt-5">
                    <motion.h6
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        I’m a third-year Computer Science student at <a href="https://aab-edu.net/" target="_blank" className="text-light text-decoration-none">
                        AAB College <BoxArrowUpRight className="mb-1"/></a>. I approach software development as a means to build robust and efficient solutions,
                        focusing on writing clean, maintainable code that meets user needs and enhances overall system performance.
                    </motion.h6>
                </div>
                <motion.div
                    className="personal-container d-flex justify-content-between"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.div
                        className="social-media-wrapper mt-5"
                        variants={itemVariants}
                    >
                        <SocialMedia />
                    </motion.div>
                    <motion.div
                        className="cv-wrapper mt-5"
                        variants={itemVariants}
                    >
                        <ViewCv />
                    </motion.div>
                </motion.div>
            </div>
            <div className="image-container col-xl-6 col-lg-5 my-auto">
                <motion.img
                    src="/logos/person-coding-3D.webp"
                    alt="person"
                    className="person-image w-100"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                />
            </div>
        </div>
    );
}

export default TopMain;
