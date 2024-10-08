import React, {useRef} from 'react';
import './TypeOfScams.css';
import { useNavigate } from 'react-router-dom';

function WebsiteScams() {
    // Go to the real story source
    const goToOtherPage = () => {
        window.location.href = 'https://www.smh.com.au/national/the-fake-websites-scamming-customers-by-imitating-popular-brands-20230815-p5dwqk.html'; // Replace with the desired URL
    };

    const navigate = useNavigate();

    // Function to go back to the previous page
    const goBack = () => {
        // navigate(-1); // This will navigate back to the previous page
        navigate('/identifyScam')
    };

    // Create a reference to the section
    const scamIdentificationRef = useRef(null);
    const protectYourselfRef = useRef(null);
    const realLifeStoryRef = useRef(null);

    // Function to scroll to the section
    const scrollToSection = (ref) => {
        if (ref.current) {
            window.scrollTo({
                top: ref.current.offsetTop - 60, // Adjust above the element
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="Scams-Page">

            {/* Side Menu */}
            <nav className="Side-menu">
                <ul>
                    <h2>Page Menu</h2>
                    <li><span onClick={() => scrollToSection(scamIdentificationRef)}>How to Identify a Website Scam</span></li>
                    <li><span onClick={() => scrollToSection(protectYourselfRef)}>How to Protect Yourself</span></li>
                    <li><span onClick={() => scrollToSection(realLifeStoryRef)}>Real Life Story</span></li>
                </ul>
            </nav>

            <header className="scams-header">
                <button onClick={goBack}>Back to Pervious Page</button>
                <h2>Website Scams</h2>
                {/* <p>Website scams are fraudulent sites designed to steal personal information, financial details, or money from unsuspecting users. These sites often mimic legitimate ones, like banks or online stores, to appear credible. Common types of website scams include phishing sites that steal login credentials, fake e-commerce sites that take payments without delivering goods, and investment scams promising high returns. Users should always verify a website's authenticity before entering sensitive information to avoid falling victim.</p> */}
            </header>
            {/* How to Identify a Scam Section */}
            <section className="scam-identification" ref={scamIdentificationRef}>
                <h3>How to Identify a Website Scam</h3>
                <p>
                    It is likely that you are interacting with a scam website if it:
                    <ul>
                        <li>Has an unusual URL such as containing unnecessary words, extra characters, replaces letters with numbers or has words misspelt such as a company name</li>
                        <li>Prices items significantly lower compare to other sites</li>
                        <li>Requires unusual payment methods such as gift cards or cryptocurrency</li>
                        <li>Contains only generic, positive reviews</li>
                        <li>Has poor quality design and spelling and grammar errors</li>
                        <li>Is missing a contact information section</li>
                        <li>Is missing a shipping and return policy</li>
                    </ul>
                </p>
                <h4>Examples</h4>
                <div className="scam-example-img-container">
                    <img src="/images/Website_example1.png" alt="Website example" className="example-image"
                        style={{
                            maxWidth: '400px'
                        }} />
                    <img src="/images/Website_example2.png" alt="Website example" className="example-image"
                        style={{
                            maxWidth: '400px'
                        }} />
                </div>
                <p>
                    Signs the URLs are fake:
                    <ul>
                        <li>Organisation name is misspelt</li>
                        <li>Numbers replacing letters in organisation name</li>
                    </ul>
                </p>
            </section>

            {/* How to Protect Yourself Section */}
            <section className="protect-yourself" ref={protectYourselfRef}>
                <div className="protect-yourself-contain">
                    <h3>How to Protect Yourself</h3>
                    <p>
                        <ul>
                            <li>Research the organisation or person you’re in contact with before providing any personal information or giving money</li>
                            <li>Do not rely on reviews written on the website, search for independent reviews on other sites </li>
                            <li>If a pop-up appears on the screen do not click on it</li>
                            <li>If there is a secure, authenticated way to reach the organisation such as an app or portal use this</li>
                            <li>Look up the domain age using <a href="https://whois.domaintools.com/" target="_blank" rel="noopener noreferrer">Whois Lookup</a>
                                <ul>
                                    <li>If a website has not been active for long it is more likely to be a fake website</li>
                                </ul>
                            </li>
                            <li>Use a website checker such as the <a href="https://transparencyreport.google.com/safe-browsing/search?hl=en" target="_blank" rel="noopener noreferrer">Google Transparency Report</a> or <a href="https://www.urlvoid.com/" target="_blank" rel="noopener noreferrer">URLVoid</a> to check if a website is safe</li>
                        </ul>
                    </p>
                </div>
            </section>

            {/* Real-Life Story Section */}
            <section className="real-life-story" ref={realLifeStoryRef}>
                <h3>Real-Life Story</h3>
                <h4>Fake Websites Scamming Australian Shoppers by Imitating Popular Brands</h4> {/* Story Title */}
                <p>
                    The Australian Competition and Consumer Commission (ACCC) has seen a rise in reports of fake websites mimicking popular Australian clothing brands such as Gorman, Peter Alexander, and RM Williams. These fraudulent sites, often advertised on social media, offer significant discounts on items, luring shoppers to enter their payment information. Victims either receive counterfeit products or nothing at all. The scam websites are sophisticated, using stolen branding, logos, and even Australian Business Numbers (ABNs) to appear legitimate. Companies like Meta and TikTok are working to remove these fake ads from their platforms, while the ACCC advises consumers to be cautious of deals that seem too good to be true and to use secure payment methods.
                </p>


                {/* Clickable Box with URL Link */}
                <button onClick={goToOtherPage}>Read the Full Story</button>
            </section>
        </div>
    );
}

export default WebsiteScams;
