import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.jsx";
import TopMain from "./components/TopMain.jsx";
import Technologies from "./components/Technologies.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
// import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import {ScrollTop} from 'primereact/scrolltop';
import {ArrowUp} from "react-bootstrap-icons";
import Certificates from "./components/Certificates.jsx";

function App() {

    return (
        <div className="container">
            <Navbar/>
            <TopMain/>
            <hr className="text-light"/>
            <Technologies/>
            <hr className="text-light"/>
            <Projects/>
            <hr className="text-light"/>
            <Certificates/>
            <hr className="text-light"/>
            <Footer/>
            <ScrollTop className="scrolltop-component" icon={<ArrowUp className="text-light"/>}/>
        </div>
    )
}

export default App
