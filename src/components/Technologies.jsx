import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Technologies = () => {
    const technologies = [
        '/logos/bootstrap-logo.png', "/logos/tailwindcss-logo.png",'/logos/typescript.png',
        '/logos/react-logo.webp', '/logos/vuejs-logo.png', '/logos/angularjs-logo.png', "/logos/nextjs-logo.png",
        "/logos/nodejs-logo.png", '/logos/expressjs-logo.png', '/logos/csharp-logo.png', '/logos/sql-logo.png', "/logos/mongodb-logo.png"
    ];

    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { threshold: 0.1, triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            className="technologies-wrapper"
            id="technologies"
            data-section="true"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
        >
            <h1 className="text-light text-center mb-5">Technologies I Use</h1>
            <motion.div
                className="technologies-container"
                variants={containerVariants}
            >
                <div className="tech-card d-flex flex-wrap justify-content-center gap-5">
                    {technologies.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            animate={controls}
                            className="w-auto p-2"
                        >
                            <img
                                src={item}
                                alt="technology-logo"
                                className="techno-image p-3 text-white"
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
}

export default Technologies;
