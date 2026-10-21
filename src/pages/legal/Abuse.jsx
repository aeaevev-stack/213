import { LegalLayout } from "@/layouts/LegalLayout";

export function Abuse() {
    return (
        <LegalLayout title="Abuse Reporting & Enforcement" date="January 7, 2026">
            <p className="lead">
                <strong>Stackryze Domains</strong> (operated by Stackryze, a registered MSME in India) is committed to maintaining a safe, secure, and abuse-free platform. We take all reports of misuse, illegal activity, or policy violations seriously and respond promptly.
            </p>
            <p className="font-medium">
                This policy is governed by and construed in accordance with the laws of India.
            </p>
            <p>
                We aim to act fairly and proportionately, while prioritizing security, legal compliance, and user safety.
            </p>

            <h3>1. Abuse Policy</h3>
            <p>
                Stackryze maintains a strict policy for abuse and misuse:
            </p>
            <ul>
                <li>Malware, phishing, or deceptive content</li>
                <li>Illegal activities, fraud, or scams</li>
                <li>Copyright infringement or trademark abuse</li>
                <li>Spam, DDoS attacks, or network abuse</li>
                <li>Adult content, hate speech, or violence</li>
            </ul>
            <p>
                Violations result in immediate suspension or permanent termination without prior notice or opportunity to cure.
            </p>

            <h3>2. How to Report Abuse</h3>
            <div className="bg-red-50 dark:bg-red-950/30 border-l-4 border-red-500 p-6 rounded-r-lg my-8">
                <p className="font-bold text-red-900 dark:text-red-200 mb-2 text-lg">Primary Abuse Contact:</p>
                <a href="mailto:reportabuse@stackryze.com" className="text-2xl font-bold text-red-700 dark:text-red-400 hover:underline block mb-4">
                    reportabuse@stackryze.com
                </a>
                <p className="text-red-800 dark:text-red-200 text-sm mb-4">
                    <strong className="dark:text-white">Response Time:</strong> All abuse reports are reviewed within <span className="font-bold dark:text-white">24 hours</span>. Critical threats (active phishing, malware) are escalated immediately.
                </p>
                <p className="text-red-800 dark:text-red-200 text-sm font-bold">
                    When reporting, please include:
                </p>
                <ul className="text-red-800 dark:text-red-200 text-sm list-disc pl-6 mt-2">
                    <li>Full subdomain URL (e.g., example.stackryze.com)</li>
                    <li>Description of the violation or harmful content</li>
                    <li>Evidence (screenshots, logs, or relevant links)</li>
                    <li>Your contact information for follow-up</li>
                </ul>
            </div>

            <h3>3. What Happens After You Report</h3>
            <p><strong>Step 1: Verification</strong></p>
            <p>
                Our team reviews the report and investigates the subdomain. We may request additional information if needed.
            </p>

            <p><strong>Step 2: Action</strong></p>
            <p>
                If the violation is confirmed, we will:
            </p>
            <ul>
                <li><strong>Immediately suspend</strong> the subdomain to prevent further harm</li>
                <li><strong>Contact the subdomain owner</strong> (when feasible and non-urgent)</li>
                <li><strong>Permanently terminate</strong> the subdomain for severe or repeat violations</li>
                <li><strong>Report to authorities</strong> when illegal activity is detected</li>
            </ul>

            <p><strong>Step 3: Follow-Up</strong></p>
            <p>
                We will notify the reporter of the action taken (when appropriate and without violating user privacy). Serious cases may be escalated to law enforcement or security organizations.
            </p>

            <h3>4. Types of Violations We Act On</h3>
            <p><strong>Security Threats (Immediate Action)</strong></p>
            <ul>
                <li>Active phishing or credential harvesting</li>
                <li>Malware distribution or command-and-control servers</li>
                <li>DDoS infrastructure or botnet operations</li>
            </ul>

            <p><strong>Legal Violations</strong></p>
            <ul>
                <li>Copyright or trademark infringement</li>
                <li>Illegal content (as defined by Indian law)</li>
                <li>Fraud, scams, or deceptive practices</li>
            </ul>

            <p><strong>Policy Violations</strong></p>
            <ul>
                <li>Adult or pornographic content</li>
                <li>Hate speech or violent extremism</li>
                <li>Spam or unsolicited bulk messaging</li>
                <li>Resource abuse or bandwidth exploitation</li>
            </ul>

            <h3>5. Law Enforcement Cooperation</h3>
            <p className="font-bold">
                Stackryze actively cooperates with:
            </p>
            <ul>
                <li>Indian law enforcement agencies and CERT-In</li>
                <li>International cybersecurity organizations</li>
                <li>Abuse prevention networks and threat intelligence groups</li>
            </ul>
            <p>
                We will provide user data, logs, and evidence when legally required or when serious criminal activity is suspected. Users will NOT be notified when data is shared with law enforcement where legally prohibited or not required.
            </p>

            <h3>6. User Liability</h3>
            <p>
                Subdomain owners are solely responsible for:
            </p>
            <ul>
                <li>All content and activity associated with their subdomain</li>
                <li>Legal claims, damages, or enforcement actions arising from misuse</li>
                <li>Any violations of law or our policies</li>
            </ul>
            <p>
                Stackryze is not liable for user content, actions, or damages. Users agree to indemnify Stackryze from all claims arising from their subdomain use.
            </p>

            <h3>7. False Reports</h3>
            <p>
                Submitting false, malicious, or abusive reports may result in:
            </p>
            <ul>
                <li>Your own account termination</li>
                <li>Being blocked from reporting future issues</li>
                <li>Legal action may be pursued in cases of defamation, harassment, or abuse of the reporting system</li>
            </ul>

            <h3>8. Additional Contacts</h3>
            <ul className="list-none pl-0 space-y-2">
                <li>Security Vulnerabilities: <a href="mailto:security@stackryze.com" className="text-signal hover:underline font-medium">security@stackryze.com</a></li>
                <li>Legal Inquiries: <a href="mailto:legal@stackryze.com" className="text-signal hover:underline font-medium">legal@stackryze.com</a></li>
                <li>General Support: <a href="mailto:support@stackryze.com" className="text-signal hover:underline font-medium">support@stackryze.com</a></li>
            </ul>

            <h3>9. Transparency and Accountability</h3>
            <p>
                Stackryze is committed to operating transparently while protecting user privacy. We may publish aggregated abuse statistics or threat intelligence reports to benefit the broader security community.
            </p>
            <p>
                Stackryze reserves the right to take any action it deems necessary to protect its infrastructure, users, and the public.
            </p>

            <p className="mt-8">
                Thank you for helping us maintain a safe and trusted platform. Together, we can keep Stackryze Domains secure for legitimate users worldwide.
            </p>
        </LegalLayout>
    );
}
