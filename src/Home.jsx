import Card from 'react-bootstrap/Card';

// components
import About from "./components/About.jsx";

// images
import gradimg from "./assets/gradimg.png";

// projects
import ProjectPortfolio from './projects/ProjectPortfolio.jsx';
import ProjectChess from './projects/ProjectChess.jsx';
import ProjectFPGA from './projects/ProjectFPGA.jsx';
import ProjectGrad from './projects/ProjectGrad.jsx';
import ProjectCompress from './projects/ProjectCompress.jsx';

// style sheet
import "./Home.css";

const Home = () => {
    return (
        <div className="page-content">
            <div className="top-section">
                <About />
            </div>

            <div className="colorbar"></div>

            <div className="bottom-section text-start">
                <div id="projects"></div>
                <h1 className="section-title">Projects</h1>
                <div className="projectList">
                    <ProjectCompress />
                    <ProjectPortfolio />
                    <ProjectGrad />
                    <ProjectFPGA />
                    <ProjectChess />
                </div>
            </div>
        </div>
    );
};

export default Home;