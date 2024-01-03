import Card from "react-bootstrap/Card";

// components
import About from "./components/About.jsx";

// images
import gradimg from "./assets/gradimg.png";
import portfolioimg from "./assets/portfolio.png";
import chessimg from "./assets/mainpic.png";
import fpgaimg from "./assets/nexys.jpg";

// style sheet
import "./Home.css";

const Home = () => {
    return (
        <div className="page-content">

            <About />

            <div className="text-start">
                <h1>Projects</h1>
                <div className="projectList">
                    <Card className="proj">
                        <div className="img-container">
                            <Card.Img className="proj-image" src={portfolioimg} variant="top"/>
                        </div>
                        <Card.Body>
                            <Card.Title>Portfolio Site</Card.Title>
                            <Card.Text className="proj-text">
                                Used React.js and Node.js to write a simple portfolio webpage hosted on Github Pages. Currently viewing :)
                            </Card.Text>
                            <Card.Link className="proj-link" href="https://github.com/rohankumar-1/rohankumar-1.github.io">Repository</Card.Link>
                        </Card.Body>
                    </Card>

                    <Card className="proj">
                        <div className="img-container">
                            <Card.Img className="proj-image" src={gradimg} variant="top"/>
                        </div>
                        <Card.Body>
                            <Card.Title>Simple Autograd</Card.Title>
                            <Card.Text className="proj-text">
                            Inspired by Andrej Karpathy's micrograd, a functional neural network library from scratch. Automatic differentation for backprop, and modular NN architecture framework. Written in Python3 using numpy.
                            </Card.Text>
                            <Card.Link className="proj-link" href="https://github.com/rohankumar-1/autograd">Repository</Card.Link>
                        </Card.Body>
                    </Card>

                    <Card className="proj">
                        <div className="img-container">
                            <Card.Img className="proj-image" src={fpgaimg} variant="top"/>
                        </div>
                        <Card.Body>
                            <Card.Title>Multimodal Clock using VGA and FPGA</Card.Title>
                            <Card.Text className="proj-text">
                                The goal of this project was to learn more about HDLs and implementation of combinational+sequential logic on FPGAs. A simple clock with 12h, 24h, timer, and stopwatch capabilities, written in Verilog and outputted to a monitor via VGA connection.
                            </Card.Text>
                            <Card.Link className="proj-link" href="https://github.com/rohankumar-1/Multimodal-Clock-FPGA">Repository</Card.Link>
                        </Card.Body>
                    </Card>

                    <Card className="proj">
                        <div className="img-container">
                            <Card.Img className="proj-image" src={chessimg} variant="top"/>
                        </div>
                        <Card.Body>
                            <Card.Title>SimpleChess App</Card.Title>
                            <Card.Text className="proj-text">
                            Chess app, implemented from scratch, on Android Studio, written in Java. Complete backend for chess logic, as well as leaderboard, persistent game state, and multiple levels of Bot difficulties (based on different backtracking + chess bot logic).  
                            </Card.Text>
                            <Card.Link className="proj-link" href="https://agile.bu.edu/gitlab/public-projects/ec327-public-projects/group12project/-/tree/master/app/src/main/res/drawable?ref_type=heads">Repository</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Home;