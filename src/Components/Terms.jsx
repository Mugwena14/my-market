import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Terms.module.css'

const Terms = () => {
    return (
        <div className={styles.terms}>
<h1>Terms and Conditions</h1>

<h3>
    Last updated: 22 July 2025.
</h3>


<p>
    Welcome to LoopKart! By accessing or using our 
    app or website (the “Service”), you agree to comply
    with and be bound by the following Terms and Conditions
    (“Terms”). Please review them carefully before using 
    the Service.

</p>

<h3>
    1. Description of Service
</h3>

<p>
    LoopKart is a peer-driven marketplace where users can 
    list products, share contact details, and upload images 
    to facilitate discovery, buying, and selling. Users may 
    submit listings with product descriptions, images, and 
    optional contact information to help others find what they're looking for.
</p>

<h3>
    2. User-Generated Content
</h3>


<p>
    Users are solely responsible for the content they upload, including 
    listings, images, and contact details. By submitting content to 
    LoopKart, you confirm that:
</p>

<ul>
    <li>You own or have rights to the content.</li>
    <li>It complies with LoopKart's content guidelines.</li>
    <li>You grant LoopKart permission to display, distribute, and store the content.</li>
</ul>

<p>
    We reserve the right to review, modify, or remove user content at our discretion 
    to maintain platform quality and safety.
</p>

<h3>
    3. Privacy
</h3>

<p>
    LoopKart values user privacy. By using the Service, you agree to our <Link to="/Privacy">Privacy Policy</Link>,
    which outlines how your data—including names, contact details, and location—is 
    collected and used. LoopKart may also use third-party services such as advertising 
    networks, whose data handling is subject to their own privacy policies.
</p>


<h3>
    4. Content Guidelines
</h3>

<p>
    All user content uploaded to LoopKart must:
</p>

<ul>
    <li>Be appropriate and safe for public viewing.</li>
    <li>Accurately represent the product or service being offered.</li>
    <li>Not infringe on copyright, trademarks, or the rights of others.</li>
</ul>

<p>
    By uploading product images or descriptions, you warrant that:
</p>

<ul>
    <li>You are the owner or authorized to share the content.</li>
    <li>The content does not mislead or impersonate another user or brand.</li>
</ul>


<p>
    LoopKart reserves the right to remove listings that violate these guidelines.
</p>


<h3>
    5. Copyright Infringement & Takedown Policy
</h3>

<p>
    If you believe that any content on LoopKart infringes on your copyright, 
    you may submit a takedown request to <a href="mailto:">loopkart.mugwena.co.za</a> with the subject 
    “Copyright Infringement Notice.” Include:
</p>

<ul>
    <li>A description of the copyrighted work</li>
    <li>A link to the alleged infringing content</li>
    <li>A statement affirming your ownership or authorization</li>
    <li>Your full contact details</li>
</ul>

<p>LoopKart will review and take appropriate action.</p>


<h3>
    6. Liability for Copyright Violations
</h3>


<p>
    Users are fully responsible for any legal consequences of uploading 
    unauthorized or infringing material. LoopKart disclaims all liability 
    related to third-party claims or legal actions arising from user content.
</p>


<h3>
    7. Age Requirement
</h3>


<p>
    By using LoopKart, you confirm that you are at least 18 years old, 
    or you have obtained parental consent if under 18. LoopKart is not intended 
    for children under the age of 13.
</p>


<h3>
    8. Dispute Resolution
</h3>

<p>
    If disputes or complaints arise concerning listings, contact info, 
    or content, LoopKart will investigate and take suitable actions. 
    Users are encouraged to report problematic content using the app's feedback or report features.
</p>

<h3>
    9. Limitation of Liability
</h3>

<p>
    LoopKart is provided “as is,” without warranties of any kind. We do not 
    guarantee uninterrupted access, accuracy of listings, or outcomes from using 
    the Service. Under no circumstances shall LoopKart or its affiliates be held 
    liable for damages arising from use, scams or inability to use the Service.
</p>

<h3>
    10. Termination of Accounts
</h3>

<p>
    LoopKart reserves the right to suspend or terminate accounts that:
</p>

<ul>
    <li>Violate these Terms</li>
    <li>Engage in fraudulent, misleading, or harmful activities.</li>
    <li>Abuse platform functionality or harm other users.</li>
</ul>

<p>Termination will occur without prior notice.</p>


<h3>
    11. Modifications to Terms
</h3>

<p>
    We may update these Terms periodically. Major updates will be posted, 
    and continued use of LoopKart after changes implies your acceptance. 
    We recommend checking this page regularly to keep up with the updates.
</p>

<h3>
    12. Governing Law
</h3>


<p>
    These Terms shall be governed by and interpreted under the laws of South Africa, 
    without regard to conflict-of-law principles.
</p>


<h4>
    Contact Us
</h4>

Questions? Reach out to our team at: <a href="mailto:mugwena.co.za">loopkart.mugwena.co.za</a>
        </div>
    )
}

export default Terms