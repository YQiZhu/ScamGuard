import React from 'react';
import './PhoneScams.css';

function ProductAndServiceScams() {
    return (
        <div className="ScamsPage">
            <h2>Product And Service Scams</h2>
            <p>Details and examples about how Product And Service Scams Scams work and how to identify them.</p>

            {/* How to Identify a Scam Section */}
            <section className="scam-identification">
                <h3>How to Identify a Scam</h3>
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
                <img src="/images/Product_example.png" alt="Product example" className="example-image" />
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
            </section>
        </div>
    );
}

export default ProductAndServiceScams;