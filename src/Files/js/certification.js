// src/html/CoverPage.js
import "../css/certification.css";
const publicUrl = process.env.PUBLIC_URL;
const certificationContent = `
<header>
        <h1>Certification</h1>
    </header>

    <main class="container">
        <section class="certification-details">
            <h2>HTML/CSS Certiport Certification</h2>
            <p>
                The HTML/CSS Certiport certification validates proficiency in HTML and CSS, fundamental languages used in web development. This certification demonstrates competence in creating and styling web pages, essential skills for front-end development.
            </p>
        </section>

        <section class="certification-details">
            <h2>Networking Certiport Certification</h2>
            <p>
                The Networking Certiport certification validates core networking skills such as IP addressing, connectivity configuration, and troubleshooting network issues. This result confirms my ability to build and maintain reliable, secure network environments.
            </p>
        </section>

        <section class="certificate-proof">
            <h2>Certification Proof</h2>
            <p>Attached is the proof of my HTML/CSS and Networking certifications:</p>
            <div class="pdf-wrapper">
                <iframe class="pdf-viewer" src="${publicUrl}/htmlcss.pdf" title="HTML/CSS Certification PDF"></iframe>
            </div>
            <div class="pdf-wrapper">
                <iframe class="pdf-viewer" src="${publicUrl}/networking.pdf" title="Networking Certification PDF"></iframe>
            </div>
        </section>
    </main>

    <footer>
    </footer>
`;

export default certificationContent;
