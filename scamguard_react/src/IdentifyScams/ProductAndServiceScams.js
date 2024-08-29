import React from 'react';
import './PhoneScams.css';

function ProductAndServiceScams() {
    // Go to the real story source
    const goToOtherPage = () => {
        window.location.href = 'https://www.abc.net.au/news/2024-05-21/false-billing-scam-on-rise-australian-banks-powerless/103870850';
    };
    return (
        <div className="ScamsPage">
            <h2>Product And Service Scams</h2>
            <p>Product and service scams involve scammers posing as legitimate buyers or sellers to trick victims into sending money or personal information. These scams often feature fake websites, online profiles, or ads that closely mimic real businesses, offering products and services at prices that seem too good to be true. Scammers may also alter payment details on legitimate invoices to redirect funds. Common examples include fake e-commerce sites and scams on platforms like Facebook Marketplace. Always verify the legitimacy of the seller and product before making any purchases.</p>

            {/* How to Identify a Scam Section */}
            <section className="scam-identification">
                <h3>How to Identify a Product and Service Scam</h3>
                <p>
                    It is likely that you are encountering a product and service scam if:
                    <ul>
                      <li>Items are offered at extremely low prices</li>
                      <li>The website does not include terms and conditions, an ABN or a privacy policy</li>
                      <li>They require an unusual payment method such as gift cards, crypto currency or PayPal’s family and friends option</li>
                      <li>You receive an invoice for something you haven’t purchased</li>
                      <li>A buyer sends a payment which is more than the agreed price and asks you to refund the amount they overpaid</li>
                      <li>The details of an account holder don’t match the person or business you think you’re paying</li>
                    </ul>
                </p>
                <h4>Example</h4>
                <img src="/images/Product_example.png" alt="Product example" className="example-image" />
                <p>
                    Signs this is a scam website:
                    <ul>
                        <li>All items on store are heavily discounted</li>
                    </ul>
                </p>
            </section>

            {/* How to Protect Yourself Section */}
            <section className="protect-yourself">
                <h3>How to Protect Yourself</h3>
                <p>
                    <ul>
                      <li>Search for the ABN on the website and verify it using <a href="https://abr.business.gov.au/" target="_blank" rel="noopener noreferrer">ABN lookup</a></li>
                      <li>Search for the official site of the organisation
                        <ul>
                            <li>Don’t assume that the first result from the search engine is the real website</li>
                        </ul>
                      </li>
                      <li>Search for the website and the word ‘scam’ or ‘review’ and examine the results carefully</li>
                      <li>Use secure payment methods that come with protections such as PayID or PayPal (NOT the family and friends option)</li>
                      <li>Look up the domain age using <a href="https://whois.domaintools.com/" target="_blank" rel="noopener noreferrer">Whois Lookup</a> 
                        <ul>
                            <li>If a website has not been active for long it is more likely to be a fake website</li>
                        </ul>
                      </li>
                      <li>If a website ends with .au use the <a href="https://whois.auda.org.au/" target="_blank" rel="noopener noreferrer">Australian Domain Authority’s lookup</a> to check who has registered the website and compare it to the information given on the website</li>
                    </ul>
                </p>

                    {/* Real-Life Story Section */}
                    <section className="real-life-story">
                        <h3>Real-Life Story</h3>
                        <h4>Surge in Product and Service Scams in Australia</h4> {/* Story Title */}
                        <img src="/images/Productandservicescamrealstory.jpeg" alt="Product and service scam real story" className="example-image" />
                        <p>
                            Product and service scams, especially false billing schemes, are increasing in Australia. Scammers impersonate businesses by altering invoices to divert payments to fraudulent accounts. Tour operator Meng Wong lost $80,000 when a client mistakenly paid a scammer. Australia's banks are introducing the Scam-Safe Accord to cross-check account details, a measure proven effective in reducing fraud overseas. The ACCC supports these efforts but urges stricter regulations to further protect consumers. Despite these initiatives, scams targeting high-value transactions are on the rise.
                        </p>
                    </section>

                    {/* Clickable Box with URL Link */}
                    <button onClick={goToOtherPage}>Read the Full Story</button>
            </section>
        </div>
    );
}

export default ProductAndServiceScams;
