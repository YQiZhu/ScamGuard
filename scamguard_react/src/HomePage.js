import React from 'react';
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient';
import { useNavigate } from 'react-router-dom';
import * as reactSpring from '@react-spring/three';
import * as drei from '@react-three/drei';
import * as fiber from '@react-three/fiber';
import './HomePage.css';

const HomePage = ({ scrollToTop }) => {
    const navigate = useNavigate();

    return (
        <>
            {/* Home Page Content */}
            <header className="App-header full-screen-header">
                <ShaderGradientCanvas
                    importedFiber={{ ...fiber, ...drei, ...reactSpring }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: -1, // This will push the animation behind the text
                    }}
                >
                    <ShaderGradient
                        control="query"
                        urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=2.5&cAzimuthAngle=60&cDistance=2.8&cPolarAngle=80&cameraZoom=24&color1=%230035e5&color2=%239694d6&color3=%23b66ed7&destination=onCanvas&embedMode=off&envPreset=dawn&format=gif&fov=30&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1.5&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=9&reflection=0.1&rotationX=60&rotationY=0&rotationZ=-60&shader=defaults&type=sphere&uAmplitude=0&uDensity=4.3&uFrequency=0&uSpeed=0.02&uStrength=1.1&uTime=9&wireframe=false&zoomOut=false"
                    />
                </ShaderGradientCanvas>

                <h1>Staying safe from online scams</h1>
                <p>Welcome to your go-to resource for staying safe from online scams.</p>
                <div className="scroll-hint">
                    <span>Scroll Down ↓</span>
                </div>
            </header>

            <main>
                <section className="Desc-section">
                    {/* <h2>What is on this website?</h2> */}
                    <div className="hover-card-container">
                        <div className="hover-card">
                            <div className="hover-card-content">
                                <div className="hover-card-main">
                                    <h3>Spot Scams Easily</h3>
                                    <img
                                        src={require('./images/scam_alert_no_background.png')}
                                        alt="Spot Scams"
                                        style={{
                                            width: '160px',
                                            paddingBottom: '15px',
                                            // height: '130px',
                                        }}
                                    />
                                </div>
                                <div className="hover-card-description">
                                    <p>
                                        👀 Learn to identify scams with simple explanations and visual guides, so you know exactly what to watch out for.
                                    </p>
                                    <button onClick={() => navigate('/identifyScam')}>Get Started</button>
                                </div>
                            </div>
                        </div>
                        <div className="hover-card">
                            <div className="hover-card-content">
                                <div className="hover-card-main">
                                    <h3>Report and Get Help</h3>
                                    <img
                                        src={require('./images/report_help.png')}
                                        alt="Report and Get Help"
                                        style={{
                                            width: '130px',
                                            height: '180px',
                                        }}
                                    />
                                </div>
                                <div className="hover-card-description">
                                    <p>
                                        🚨 Fallen victim to a scam or suspect one? Use our tools to report it and get immediate guidance on what to do next.
                                    </p>
                                    <button onClick={() => navigate('/whatToDo')}>Get Started</button>
                                </div>
                            </div>
                        </div>

                        <div className="hover-card">
                            <div className="hover-card-content">
                                <div className="hover-card-main">
                                    <h3>Practice Scam Detection</h3>
                                    <img
                                        src={require('./images/scam_detect.png')}
                                        alt="Practice Scam Detection"
                                        style={{
                                            width: '100px',
                                            height: '120px',
                                            // marginBottom: '10px' 
                                        }}
                                    />
                                </div>
                                <div className="hover-card-description">
                                    <p>
                                        🧠 Test your scam-spotting skills with interactive exercises designed to boost your confidence in staying scam-free.
                                    </p>
                                    <button onClick={() => navigate('/quiz')}>Get Started</button>
                                </div>
                            </div>
                        </div>

                        <div className="hover-card">
                            <div className="hover-card-content">
                                <div className="hover-card-main">
                                    <h3>Check Your Scam Risk</h3>
                                    <img
                                        src={require('./images/check_scam_risk.png')}
                                        alt="Check Your Scam Risk"
                                        style={{
                                            width: '180px',
                                            height: '120px',
                                            // marginBottom: '10px' 
                                        }}
                                    />
                                </div>
                                <div className="hover-card-description">
                                    <p>
                                        🔒 Enter your details into our risk assessment tool to find out how vulnerable you are to scams and get tailored advice to protect yourself.
                                    </p>
                                    <button onClick={() => navigate('/riskAssessment')}>Get Started</button>
                                </div>
                            </div>
                        </div>

                        <div className="hover-card">
                            <div className="hover-card-content">
                                <div className="hover-card-main">
                                    <h3>Verify Suspicious Messages</h3>
                                    <img
                                        src={require('./images/verifying.png')}
                                        alt="Verify Suspicious Messages"
                                        style={{
                                            width: '140px',
                                            height: '110px',
                                            // marginBottom: '10px' 
                                        }}
                                    />
                                </div>
                                <div className="hover-card-description">
                                    <p>
                                        📧 Not sure if an email, text, or message is a scam? Use our verification tool to put your doubts to rest.
                                    </p>
                                    <button onClick={() => navigate('/checkScam')}>Get Started</button>
                                </div>
                            </div>
                        </div>

                        <div className="hover-card">
                            <div className="hover-card-content">
                                <div className="hover-card-main">
                                    <h3>Create Scam Awareness Posters</h3>
                                    <img
                                        src={require('./images/create_poster.png')}
                                        alt="Create Scam Posters"
                                        style={{
                                            width: '160px',
                                            height: '120px',
                                            // marginBottom: '10px' 
                                        }}
                                    />
                                </div>
                                <div className="hover-card-description">
                                    <p>
                                        📌 Design and print personalized scam-awareness posters to remind yourself—and your community—how to stay safe.
                                    </p>
                                    <button>Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default HomePage;
