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
            </section>

            {/* How to Protect Yourself Section */}
            <section className="protect-yourself">
                <h3>How to Protect Yourself</h3>
                <p>
                </p>
                {/* Add more content or components specific to protecting yourself */}
            </section>
        </div>
    );
}

export default ProductAndServiceScams;