// src/TextForPoster/TextForPoster.js

export const scamOptions = [
    {
        id: 'text_scams',
        label: 'Text Scams',
        sections: {
            howItWorks: [
                'Text scams trick people into sharing personal info or clicking harmful links by posing as trusted sources with fake alerts or warnings.'
                // Add more as needed
            ],
            howToIdentify: [
                'Asks yo to open a link.',
                'Demands immediate action.',
                'Asks for sensitive info.',
                'Poor pelling and grammar.'
                // Add more as needed
            ],
            commonTactics: [
                'Impersonation of reputable companies.',
                'Creating a sense of urgency.',
                'Requests for passwords or payment info.',
                'Promises of prizes or money for details.'
                // Add more as needed
            ],
            protectYourself: [
                'Avoid clicking on unknown links.',
                'Always use official apps or websites.',
                'Don’t use the number they gave you.',
                'Don’t share personal or financial details.'
                // Add more as needed
            ],
        },
    },
    {
        id: 'phone_scams',
        label: 'Phone Scams',
        sections: {
            howItWorks: [
                'Phone Scams trick people into giving personl info, money, or account access by pretending to be trusted organizations.'
                // Add more as needed
            ],
            howToIdentify: [
                'Is unexpected.',
                'Comes from unknown numbers.',
                'Demands immediate action.',
                'Asks for sensitive info.'
                // Add more as needed
            ],
            commonTactics: [
                'Claims your account is hacked.',
                'Threats of arrest.',
                'Request to install unfamiliar application or software.',
                'Demands immediate payment.'
                // Add more as needed
            ],
            protectYourself: [
                'Don’t share personal or financial details.',
                'Hang up and call back through official channels.'
                // Add more as needed
            ],
        },
    },
    {
        id: 'email_scams',
        label: 'Email Scams',
        sections: {
            howItWorks: [
                'Email scams mimic trusted sources, using urgency to steal personal info or install malware. Be cautious with unknown senders and use spam filters to stay safe.'
                // Add more as needed
            ],
            howToIdentify: [
                'Unmatch or suspicious sender addresses.',
                'Spelling and grammar mistakes.',
                'Poor spelling and grammer.',
                'Requests for sensitive info.'
                
                // Add more as needed
            ],
            commonTactics: [
                'Impersonating reputable companies.',
                'Creating a sense of urgency.',
                'Phishing links.',
                'Malware attachments.'
                // Add more as needed
            ],
            protectYourself: [
                'Don't click unknown links.',
                'Use spam filters and antivirus software.',
                'Verify the sender.',
                'Never share personal info.'
                // Add more as needed
            ],
        },
    },
    {
        id: 'social_media_scams',
        label: 'Social Media Scams',
        sections: {
            howItWorks: [
                'Social media scams use fake profiles, spam, and harmful links to trick victims into sharing money or sensitive info through fake relationships, investments, or ads.'
                // Add more as needed
            ],
            howToIdentify: [
                'Duplicate friend requests from known contacts.',
                'Ads with fake celebrity endorsements.',
                'Unsolicited messages offering quick money.'
            ],
            commonTactics: [
                'Impersonating trusted contacts or companies.',
                'Promoting fake investments or products.',
                'Building fake relationships for money.'
            ],
            protectYourself: [
                'Avoid unknown links.',
                'Check profiles with little activity.',
                'Be wary of unreal offers.',
            ],
        },
    },
    {
        id: 'romance_scams',
        label: 'Romance Scams',
        sections: {
            howItWorks: [
                'Romance scams involve fake profiles on dating sites or social media to deceive victims emotionally and financially. Scammers build trust quickly, avoid in-person meetings, and eventually ask for money.'
                // Add more as needed
            ],
            howToIdentify: [
                'Quickly profess love.',
                'Can’t meet in person or video call.',
                'Want to switch to another messaging platform.',
                'Get upset if you ask questions.'
            ],
            commonTactics: [
                'Request money for a personal emergency.',
                'Offer to help you make money quickly.',
                'Ask you to keep the relationship secret from loved ones.'
            ],
            protectYourself: [
                'Don’t rush into relationships.',
                'Avoid sharing financial info.',
                'Get advice from friends or family.'
            ],
        },
    },
    {
        id: 'investment_scams',
        label: 'Investment Scams',
        sections: {
            howItWorks: [
                'Investment scams promise high returns with low risk, using fake credentials and pressure tactics. Scammers contact victims through phone, email, or social media.'
                // Add more as needed
            ],
            howToIdentify: [
                'Promise low-risk, high-return investments.',
                'Claim a famous figure endorses the investment.',
                'Request remote access to your device for transactions.',
            ],
            commonTactics: [
                'Urgent requests to invest quickly.',
                'Using new investors’ money to pay earlier investors.',
                'Confusing financial terms to appear legitimate.'
            ],
            protectYourself: [
                'Verify the investment and company.',
                'Check for proper licensing.',
                'Avoid cryptocurrency payments.',
            ],
        },
    },
    {
        id: 'product_and_service_scams',
        label: 'Product and Service Scams',
        sections: {
            howItWorks: [
                'Product and service scams involve scammers posing as buyers or sellers to trick victims into sending money or personal info. They use fake websites, profiles, or ads mimicking real businesses, often offering deals too good to be true.'
                // Add more as needed
            ],
            howToIdentify: [
                'Items priced unusually low.',
                'No terms, ABN, or privacy policy.',
                'Unusual payment methods.',
                'Invoices for items you didn’t buy.'
            ],
            commonTactics: [
                'Requesting insecure payments.',
                'Overpayment with refund requests.',
                'Mismatched account details.',
                'Fake sites with large discounts.'
            ],
            protectYourself: [
                'Verify ABN and check reviews.',
                'Use secure payment methods.',
                'Check domain age; new sites may be fake.',
                'Avoid rushing into transactions.'
            ],
        },
    },
    {
        id: 'job_scams',
        label: 'Job Scams',
        sections: {
            howItWorks: [
                'Job scams use fake listings or interviews to steal money or personal info. Scammers may ask for fees or conduct fake interviews to seem legitimate.'
                // Add more as needed
            ],
            howToIdentify: [
                'Unsolicited job offers.',
                'Promises of high income with little effort.',
                'Quick hiring with no interviews or references.'
            ],
            commonTactics: [
                'Requesting upfront payments or personal info.',
                'Fake ads on trusted platforms.',
                'Rushing you to decide quickly.'
            ],
            protectYourself: [
                'Verify job ads independently.',
                'Never send money or personal info to strangers online.'        
            ],
        },
    }, 
    {
        id: 'impersonation_scams',
        label: 'Impersonation Scams',
        sections: {
            howItWorks: [
                'Scammers pose as trusted figures, like friends or officials, to steal money or info, using urgency to pressure victims.'
                // Add more as needed
            ],
            howToIdentify: [
                'Unexpected message.',
                'Urgent request.',
                'Asked to click a link or confirm a payment.',
                'Threats of arrest or deportation.'
            ],
            commonTactics: [
                'Asking for personal or payment info.',
                'Suspicious links or email addresses.',
                'Requests for money from a new number.'
        ],
            ],
            protectYourself: [
                'Verify the organisation or the related person.',
                'Cut contact if threatened.',
                'Don’t open unknown links or attachments.',
            ],
        },
    },// Add more as needed
];
