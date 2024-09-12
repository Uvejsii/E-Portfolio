import { motion } from 'framer-motion';
import { BoxArrowUpRight } from 'react-bootstrap-icons';

const Certificates = () => {
    const certificatesList = [
        {
            name: 'Responsive Web Design',
            link: 'https://www.freecodecamp.org/certification/Uvejs_Ahmeti/responsive-web-design',
            from: 'FreeCodeCamp'
        },
        {
            name: 'JavaScript Algorithms and Data Structures',
            link: 'https://www.freecodecamp.org/certification/Uvejs_Ahmeti/javascript-algorithms-and-data-structures',
            from: 'FreeCodeCamp'
        },
        {
            name: 'Foundational C# with Microsoft',
            link: 'https://www.freecodecamp.org/certification/Uvejs_Ahmeti/foundational-c-sharp-with-microsoft',
            from: 'FreeCodeCamp & Microsoft'
        },
        {
            name: 'Front End Development Libraries',
            link: 'https://www.freecodecamp.org/certification/Uvejs_Ahmeti/front-end-development-libraries',
            from: 'FreeCodeCamp'
        },
        {
            name: 'Back End Development and APIs',
            link: 'https://www.freecodecamp.org/certification/Uvejs_Ahmeti/back-end-development-and-apis',
            from: 'FreeCodeCamp'
        },
        {
            name: 'Full Stack Application Development',
            link: 'https://drive.google.com/file/d/1Y_wjCeSRPt2G86tt1Kx_G7DzRIWDY8xG/view?usp=sharing',
            from: 'AAB College'
        },
        {
            name: 'Vue 3 Fundamentals',
            link: 'https://drive.google.com/file/d/1SXpugcoWDue7Raz2hsgxZjty2yzUeObM/view?usp=sharing',
            from: 'Frontend Masters'
        },
        {
            name: 'Angular 17+ Fundamentals',
            link: 'https://drive.google.com/file/d/1zISEfAJuijq7UGXZfaODf1h2yJ2dKv5c/view?usp=sharing',
            from: 'Frontend Masters'
        },
        {
            name: 'Introduction to Next.js 13+',
            link: 'https://drive.google.com/file/d/1DoJ1V5jyzCzVbX3rnm6lS9NH7S5b9P-w/view?usp=sharing',
            from: 'Frontend Masters'
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="certificates-wrapper my-5 text-light" id="certificates" data-section="true">
            <h1 className="text-light text-center mb-4">Certificates</h1>
            <motion.div
                className="certificates-card-wrapper d-flex justify-content-center flex-wrap gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
            >
                {certificatesList.map((certificate) => (
                    <motion.div
                        key={certificate.link}
                        className="certificate-card text-center p-4"
                        variants={cardVariants}
                    >
                        <p className="mb-2 p-0">
                            <a href={certificate.link} target="_blank" className="grey-color-txt text-decoration-none" rel="noopener noreferrer">
                                {certificate.name} <BoxArrowUpRight className="mb-1"/>
                            </a>
                        </p>
                        <p className="m-0">{certificate.from}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Certificates;
