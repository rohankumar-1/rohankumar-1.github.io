import Card from "react-bootstrap/Card";
import "bootstrap-icons/font/bootstrap-icons.css";

// style sheet
import "./Home.css";

const Home = () => {
    return (
        <div className="page-content">
            <div className="first">

                <div id="about-me"></div>

                <h1 className="text-start">About Me</h1>

                <div className="info">
                    <img className="picture" src="./../data/profile_picture.jpg" alt="me!"/>
                    <div className="text-start">
                        <p>Boston, MA</p>
                        <p>roku@bu.edu</p>
                        <div>
                            <a href="https://github.com/rohankumar-1"><i className="icon bi bi-github"></i></a>
                            <a href="https://www.linkedin.com/in/rohan-kumar-in/"><i className="icon bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>

                <p className="text-start">
                    Hello! I am an undergrad Computer Engineering major at Boston University (ENG). I'm currently doing research with MIT Sloan, under Prof. Dimitris Bertsimas, and with BU ENG, under Prof. Ayse Coskun. My current interest is in applied Machine Learning, particularly in cloud systems and healthcare.
                </p>
                <p className="text-start">
                    I hope to eventually attend graduate school, and continue research, but I plan venture into industry at some point in the future. Feel free to reach out at roku@bu.edu.
                </p>
            </div>

            <div className="text-start">

                <div id="projects"></div>

                <h1>Projects</h1>

                <div className="projectList d-flex flex-wrap">

                    <Card className="proj">
                        <div className="img-container">
                            <Card.Img className="proj-image" src="/src/assets/portfolio.png" variant="top"/>
                        </div>
                        <Card.Body>
                            <Card.Title>Portfolio Site</Card.Title>
                            <Card.Text className="proj-text">
                                Used React.js and Node.js to write a simple portfolio webpage hosted on Github Pages. Currently viewing :)
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link className="proj-link" href="https://github.com/rohankumar-1/rohankumar-1.github.io">Repository</Card.Link>
                        </Card.Body>
                    </Card>

                    <Card className="proj">
                        <div className="img-container">
                            <Card.Img className="proj-image" src="/src/assets/gradimg.png" variant="top"/>
                        </div>
                        <Card.Body>
                            <Card.Title>Simple Autograd</Card.Title>
                            <Card.Text className="proj-text">
                            Inspired by Andrej Karpathy's micrograd, a functional neural network library from scratch. Automatic differentation for backprop, and modular NN architecture framework. Written in Python3 using numpy.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link className="proj-link" href="https://github.com/rohankumar-1/autograd">Repository</Card.Link>
                        </Card.Body>
                    </Card>

                    <Card className="proj">
                        <div className="img-container">
                            <Card.Img className="proj-image" src="/src/assets/nexys.jpg" variant="top"/>
                        </div>
                        <Card.Body>
                            <Card.Title>Multimodal Clock using VGA and FPGA</Card.Title>
                            <Card.Text className="proj-text">
                                The goal of this project was to learn more about HDLs and implementation of combinational+sequential logic on FPGAs. A simple clock with 12h, 24h, timer, and stopwatch capabilities, written in Verilog and outputted to a monitor via VGA connection.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link className="proj-link" href="https://github.com/rohankumar-1/Multimodal-Clock-FPGA">Repository</Card.Link>
                        </Card.Body>
                    </Card>

                    <Card className="proj">
                        <div className="img-container">
                            <Card.Img className="proj-image" src="/src/assets/mainpic.png" variant="top"/>
                        </div>
                        <Card.Body>
                            <Card.Title>SimpleChess App</Card.Title>
                            <Card.Text className="proj-text">
                            Chess app, implemented from scratch, on Android Studio, written in Java. Complete backend for chess logic, as well as leaderboard, persistent game state, and multiple levels of Bot difficulties (based on different backtracking + chess bot logic).  
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link className="proj-link" href="https://agile.bu.edu/gitlab/public-projects/ec327-public-projects/group12project/-/tree/master/app/src/main/res/drawable?ref_type=heads">Repository</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            <div className="text-start">

                <div id="CV"></div>

                <h1>Curriculum Vitae</h1>
                <p>
                    A PDF version of this CV can be found <a href="./../data/resume.pdf">here</a>.
                </p>

                <h4>Education</h4>
                <ul>
                    <li><b>B.S. in Computer Engineering, Boston University, Expected May 2025</b>
                        <ul>
                        <li>GPA: 3.96/4.00</li>
                        <li>Relevant Coursework: Algorithms and Data Structures, Machine Learning, Deep Learning, Operating Systems</li>
                        <li>Extracurriculars: Kappa Theta Pi Professional Technology Fraternity, intramural soccer, violin</li>
                        </ul>
                    </li>
                    <li><b>Avon High School, 2017-2021</b>
                        <ul>
                        <li>GPA: 4.72/4.00</li>
                        </ul>
                    </li>
                </ul>

                <h4>Experience</h4>
                <ul>
                    <li><b>Research Intern, MIT Sloan, May 2023 - Present</b>
                        <ul>
                        <li>Performing operations research under Prof. Dimitris Bertsimas, applying ML/AI and optimization in
regards to AI in healthcare across 3 concurrent projects</li>
                        <li>
                            Redesigned data pipeline, improved accuracy of models (XGBoost, ANN, RF, Optimal Classification
Trees) by over 10% in predicting patient readmission into a hospital system within 30 days of discharge</li>
                        <li>
                        Leveraged mixed-integer programming to optimize schedules for 10 physicians over fiscal quarters
                        </li>
                        </ul>
                    </li>
                    <li><b>Research Intern, Boston University, August 2023 - Present</b>
                        <ul>
                        <li>Conducting AI/ML research for cloud systems under Prof. Ayse Coskun, AI4CloudOps RedHat project</li>
                        <li>Assisting graduate researchers with experiments regarding cluster deployment of PraxiBag, an AI tool
for Python package software discovery in the cloud, discovering 500+ packages at a time</li>
                        <li>Creating and iterating on system architecture of new tools for cloud operations based on
Kubernetes/OpenShift environment</li>
                        <li>
                        Presenting experimental results, and pitching new opportunities on a weekly basis
                        </li>
                        </ul>
                    </li>
                    <li><b>Teaching Assistant, Boston University, Jan 2023 - Present</b>
                        <ul>
                            <li>
                            Assisted Prof. Tali Moreshet, EC311 Logic Design with teaching Verilog solid RTL/HDL techniques
                            </li>
                            <li>
                            Managed lab section, tutoring ~100 students debug Verilog code and logic circuits, graded homework
                            </li>
                        </ul>
                    </li>
                </ul>

                <h4>Skills</h4>
                <ul>
                    <li><b>Languages</b>: C/C++, Java, Python, SQL, MATLAB, Bash, PowerShell</li>
                    <li><b>Techniques</b>: Optimization, Neural Networks (ANN, MLP, CNN), Decision Trees, Support Vector Machines, Regression</li>
                    <li><b>Libraries</b>: PyTorch, XGBoost, Scikit-Learn, Gurobi, Numpy, Pandas, Matplotlib, Scipy</li>
                    <li><b>Tools</b>: Git/Github/Gitlab, Linux, GDB, Conda, Docker</li>
                </ul>
            </div>
        </div>
    );
};

export default Home;