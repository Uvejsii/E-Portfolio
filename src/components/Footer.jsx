import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import SocialMedia from "./SocialMedia.jsx";
import ViewCv from "./ViewCv.jsx";

const Footer = () => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.footer
            ref={ref}
            className="d-flex flex-wrap justify-content-center align-items-center gap-5 my-5"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
        >
            <motion.div
                className="left-footer border-end border-secondary pe-5"
                variants={itemVariants}
            >
                <motion.img
                    src="/logos/logo.jpg"
                    alt="logo"
                    className="logo rounded rounded-4 d-flex mx-auto"
                    variants={itemVariants}
                />
                <motion.h3 className="text-light mt-3" variants={itemVariants}>
                    Uvejs Ahmeti
                </motion.h3>
            </motion.div>
            <motion.div
                className="right-footer d-flex justify-content-between"
                variants={containerVariants}
            >
                <motion.div className="social-media-component" variants={itemVariants}>
                    <SocialMedia/>
                </motion.div>
                <motion.div className="view-cv-component" variants={itemVariants}>
                    <ViewCv/>
                </motion.div>
            </motion.div>
        </motion.footer>
    );
}

export default Footer;
