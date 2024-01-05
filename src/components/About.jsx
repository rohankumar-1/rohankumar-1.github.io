
// content
import resume from "./../../data/resume.pdf";
import profilepic from "./../../data/profile_picture.jpg";

// style sheets
import "./About.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const About = () => {

    return (
        <div className="first">

            <div id="about-me"></div>
            
            <h1 className="head-title">About Me</h1>

            <div className="info">
                <img className="picture" src={profilepic} alt="me!"/>
            </div>

            <p className="text-start">
                Hello! I am an undergrad Computer Engineering major at Boston University (ENG). I'm currently doing research with MIT Sloan, under Prof. Dimitris Bertsimas, and with BU ENG, under Prof. Ayse Coskun. My current interest is in applied machine learning, particularly in cloud systems and healthcare.
            </p>
            <p className="text-start">
                I hope to eventually attend graduate school, and continue research, but I plan venture into industry at some point in the future. Feel free to reach out at <a href="mailto: roku@bu.edu">roku@bu.edu</a>, or read my full <a href={resume}>resume</a>.
            </p>

            <div className="text-center icons">
                <div>
                    <a href="https://github.com/rohankumar-1"><i className="icon bi bi-github"></i></a>
                    <a href="https://www.linkedin.com/in/rohan-kumar-in/"><i className="icon bi bi-linkedin"></i></a>
                    <a href={resume}><i className="icon bi bi-file-person"></i></a>
                </div>
            </div>
        </div>
    );
}

export default About;