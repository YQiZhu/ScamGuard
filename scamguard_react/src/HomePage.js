import React from 'react';
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient';
import * as reactSpring from '@react-spring/three';
import * as drei from '@react-three/drei';
import * as fiber from '@react-three/fiber';
import './HomePage.css';

const HomePage = ({ scrollToTop }) => {
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
                        urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=2.5&cAzimuthAngle=70&cDistance=2.8&cPolarAngle=100&cameraZoom=25&color1=%23003fff&color2=%23585ed6&color3=%235f3ed7&destination=onCanvas&embedMode=off&envPreset=dawn&format=gif&fov=30&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1.5&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=60&rotationY=0&rotationZ=-60&shader=defaults&type=sphere&uAmplitude=0&uDensity=4.3&uFrequency=0&uSpeed=0.01&uStrength=1.1&uTime=8&wireframe=false&zoomOut=false"
                    />
                </ShaderGradientCanvas>

                <h1>ScamGuard</h1>
                <p>Welcome to ScamGuard, your go-to resource for staying safe from online scams.</p>
                <p>We're here to offer valuable insights into the latest scams and practical tips to protect yourself.</p>
                <div className="scroll-hint">
                    <span>Scroll Down ↓</span>
                </div>
            </header>

            <main>
                <section className="Desc-section">
                    {/* <h2>What is on this website?</h2> */}

                    <div className='home-main-body'>
                        <h3>Learn About Scams</h3>
                        <div className='home-main-body-text'>
                            <img
                                src={require('./images/text_scams_icon.png')}
                                alt="Text Scams"
                            />
                            <p>Our website will have easy explanations and pictures showing different types of scams. This will help you understand what scams look like and how to spot them.</p>
                        </div>
                    </div>

                    <div className='home-main-body-blue'>
                        <h3>Report Scams and Get Help</h3>
                        <div className='home-main-body-text'>
                            <img
                                src={require('./images/text_scams_icon.png')}
                                alt="Text Scams"
                            />
                            <div>
                                <p>If you come across a scam or become a victim, you can use our tools to report it. We'll guide you on how to protect yourself and help fight against scams.</p>
                                <button onClick={scrollToTop}>Go to Top of the Page</button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3>Practice Spotting Scams</h3>
                        <p>We'll offer simple exercises to help you practice recognizing scams. You can try these exercises to become more confident in avoiding scams.</p>
                    </div>

                    <div>
                        <h3>Check Your Scam Risk</h3>
                        <p>We have a tool where you can enter some details about yourself and your online activities. It will show how likely you are to be targeted by scams and what steps you can take to stay safe.</p>
                    </div>

                    <div>
                        <h3>Verify Messages</h3>
                        <p>We will help you check if messages you receive online are real or scams. This will help you feel sure that the messages you get are trustworthy.</p>
                    </div>

                    <div>
                        <h3>Create Scam Awareness Posters</h3>
                        <p>You can use our tool to make your own scam awareness posters. You can print these out to keep reminders at home or share them with friends and family to help everyone stay informed.</p>
                    </div>

                    <div>
                        <p><strong>Ready to explore? To start your journey, scroll up and click on the navigation bar to access all the resources and tools you need to stay safe.</strong></p>
                    </div>
                    <button onClick={scrollToTop}>Go to Top of the Page</button>
                </section>
            </main>
        </>
    );
};

export default HomePage;
