#!/usr/bin/env python
# coding: utf-8

# In[1]:


import json

# The updated scam_categories dictionary
scam_categories = {
    "Online Scam Phrases": {
        "words": {
            'josemonkeyorg': 7.46,
            'cnncom': 4.63,
            'http': 4.48,
            'click': 4.04,
            'remove': 3.71,
            'choose': 2.97,
            'site': 2.90
        },
        "description": "Online Scam Phrases are commonly associated with scams that involve phishing websites, suspicious URLs, and prompts to click links. Scammers often trick users into visiting fraudulent sites by embedding links that appear legitimate but lead to malicious content."
    },
    "Financial Scam Phrases": {
        "words": {
            'investment': 4.78,
            'account': 4.53,
            'money': 3.84,
            'statements': 3.85,
            'payment': 3.16,
            'transfer': 3.08,
            'approved': 2.87,
            'bank': 2.80
        },
        "description": "Financial Scam Phrases frequently appear in scams that target individuals by impersonating financial institutions or promoting fake investment opportunities. Scammers use these words to exploit trust and deceive victims into giving up money or sensitive banking information."
    },
    "Healthcare Scam Phrases": {
        "words": {
            'viagra': 4.27,
            'pills': 3.86,
            'lose': 3.14,
            'health': 2.71
        },
        "description": "Healthcare Scam Phrases are found on the scams, promoting counterfeit medications or fake health treatments. Common in email spam, these phrases lure victims with promises of weight loss, performance enhancement, or health benefits."
    },
    "Counterfeit Product Phrases": {
        "words": {
            'guaranteed': 4.46,
            'replica': 3.01,
            'custom': 3.19,
            'huge': 3.17,
            'watches': 3.21,
            'quality': 3.40,
            'rolex': 2.71,
            'cable': 2.78
        },
        "description": "Counterfeit Product Phrases are indicative of scams that involve counterfeit goods, particularly luxury items like watches and electronics. Scammers use enticing words such as 'replica' or 'guaranteed' to promote fake products at attractive prices, often leading to low-quality or fraudulent purchases."
    },
    "Emotional Manipulation Phrases": {
        "words": {
            'love': 3.67,
            'professional': 3.59,
            'dear': 3.57,
            'sex': 3.55,
            'life': 5.19
        },
        "description": "Emotional Manipulation Phrases are found in romance scams and personal appeals. Scammers often use emotionally charged language to create trust or a sense of urgency, manipulating victims into sending money or personal information under false pretenses."
    }
}

# Create a JSON file
with open('scam_categories.json', 'w') as json_file:
    json.dump(scam_categories, json_file, indent=4)

