import {useState, useEffect, useRef} from 'react';
import {List} from "react-bootstrap-icons";
import { Sidebar } from 'primereact/sidebar';

const Navbar = () => {
    const [visible, setVisible] = useState(false);

    const navbarItems = [
        {name: 'Top', id: '#top'},
        {name: 'Technologies', id: '#technologies'},
        {name: 'Certificates', id: '#certificates'},
        {name: 'Projects', id: '#projects'},
    ];

    const [activeSection, setActiveSection] = useState(null);
    const observer = useRef(null);

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('Intersecting:', entry.target.id); // Debugging
                    setActiveSection(`#${entry.target.id}`);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50% 0px'
        });

        const sections = document.querySelectorAll('[data-section="true"]');
        sections.forEach((section) => {
            observer.current.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.current.unobserve(section);
            });
        };
    }, []);

    const activeStyle = 'fw-bold text-danger nav-link active text-light fw-medium';

    return (
        <nav className="navbar navbar-expand-lg fixed-top px-5">
            <div className="container-fluid">
                <a href="#top">
                    <img src="/logo.jpg" alt="logo" className="logo border rounded-4"/>
                </a>
                <div className="large-navbar d-flex justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        {navbarItems.map((item) => (
                            <li className={activeSection === item.id ? 'active nav-item position-relative' : 'nav-item position-relative'} key={item.id}>
                                <a
                                    href={item.id}
                                    className={activeSection === item.id ? activeStyle : 'nav-link'}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="d-none burger-navbar">
                    <List className="text-light fs-1" onClick={() => setVisible(true)} />
                    <div className="">
                        <Sidebar visible={visible} onHide={() => setVisible(false)}
                        className="sidebar-component">
                            <ul className="navbar-nav">
                                {navbarItems.map((item) => (
                                    <li className={activeSection === item.id ? 'active nav-item position-relative' : 'nav-item position-relative'}
                                        key={item.id}>
                                        <a
                                            href={item.id}
                                            className={activeSection === item.id ? activeStyle : 'nav-link'}
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </Sidebar>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
