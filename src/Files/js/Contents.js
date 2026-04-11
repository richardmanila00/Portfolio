// src/html/Contents.js

import "../css/content.css";
const publicUrl = process.env.PUBLIC_URL;
const contentContent = `
<div class="container">
        <section class="technology-section">
            <h2>Web Development</h2>
            
            <article class="technology">
                <h3>JavaScript</h3>
                <p class="description">JavaScript is a versatile programming language used for web development.</p>
                <div class="pictures">
                    <img src="${publicUrl}/js/1.png" alt="JavaScript Picture 1" width="350" />
                    <img src="${publicUrl}/js/2.png" alt="JavaScript Picture 2" width="350" />
                    <img src="${publicUrl}/js/3.png" alt="JavaScript Picture 3" width="350" />
                    <img src="${publicUrl}/js/4.png" alt="JavaScript Picture 4" width="350" />
                    <img src="${publicUrl}/js/5.png" alt="JavaScript Picture 5" width="350" />
                </div>
            </article>

            <article class="technology">
                <h3>Native PHP</h3>
                <p class="description">Native PHP development involves server-side scripting for web applications.</p>
                <div class="pictures">
                    <img src="${publicUrl}/php/1.png" alt="PHP Picture 1" width="350" />
                    <img src="${publicUrl}/php/2.png" alt="PHP Picture 2" width="350" />
                    <img src="${publicUrl}/php/3.png" alt="PHP Picture 3" width="350" />
                    <img src="${publicUrl}/php/4.png" alt="PHP Picture 4" width="350" />
                </div>
            </article>

            <article class="technology">
                <h3>React</h3>
                <p class="description">React is a JavaScript library for building user interfaces.</p>
                <div class="pictures">
                    <img src="${publicUrl}/react/1.png" alt="React Picture 1" width="350" />
                    <img src="${publicUrl}/react/2.png" alt="React Picture 2" width="350" />
                </div>
            </article>

            <article class="technology">
                <h3>Laravel</h3>
                <p class="description">Laravel is a PHP framework for web development, known for its elegant syntax.</p>
                <div class="pictures">
                    <img src="${publicUrl}/laravel/1.png" alt="Laravel Picture 1" width="350" />
                    <img src="${publicUrl}/laravel/2.png" alt="Laravel Picture 2" width="350" />
                    <img src="${publicUrl}/laravel/3.png" alt="Laravel Picture 3" width="350" height="350" />
                    <img src="${publicUrl}/laravel/4.png" alt="Laravel Picture 4" width="350" />
                    <img src="${publicUrl}/laravel/5.png" alt="Laravel Picture 5" width="350" />
                </div>
            </article>
        </section>
<br><br><br><br><br>
        <section class="technology-section">
            <h2>Database</h2>
            
            <article class="technology">
                <h3>MySQL/PHPMyAdmin</h3>
                <p class="description">MySQL is an open-source relational database management system, commonly used with PHPMyAdmin for database administration.</p>
                <div class="pictures">
                    <img src="${publicUrl}/database/1.png" alt="MySQL Picture 1" />
                </div>
            </article>
        </section>

    <section class="sample-site">
        <style>
            .sample-site {
                margin-top: 2rem;
                margin-bottom: 1.5rem;
            }
            .sample-site h2 {
                margin-bottom: 1rem;
                font-size: 2rem;
            }
            .sample-site .section-box,
            .sample-site details {
                border: 1px solid #ccc;
                border-radius: 8px;
                padding: 1rem;
                background: #f9f9f9;
                margin-bottom: 1rem;
            }
            .sample-site .section-box h3 {
                margin-bottom: 0.5rem;
            }
            .sample-site summary {
                cursor: pointer;
                font-weight: 700;
                outline: none;
            }
            .sample-site .folder-item {
                border: 1px solid #ddd;
                background: #fff;
                padding: 0.85rem;
                border-radius: 6px;
                margin-top: 0.75rem;
            }
            .sample-site .folder-item:first-child {
                margin-top: 0;
            }
            .sample-site .folder-item h4 {
                margin: 0;
                font-size: 1.1rem;
            }
            .sample-site .folder-item p {
                margin: 0.5rem 0 0;
                color: #444;
            }
            .sample-site details details {
                margin-top: 0.75rem;
                padding-left: 1rem;
            }
            .sample-site .folder-img,
            .sample-site .login-img {
                max-width: 100%;
                border-radius: 6px;
                margin-top: 1rem;
                box-shadow: 0 4px 10px rgba(0,0,0,0.08);
            }
        </style>

        <h2>Sample Website</h2>
        <div class="section-box">
            <h3>Login</h3>
            <p>This is a sample login page for the website.</p>
            <img class="login-img" src="${publicUrl}/csfs/login-page.jpg" alt="Login Page" />
            <p style="margin-top: 0.75rem;">The login screen is the first page a user sees before accessing the CSFS Website.</p>
        </div>

        <details>
            <summary>CSFS Folder</summary>
            <details class="subfolder">
                <summary>Dashboard</summary>
                <div class="folder-item">
                    <h4>Dashboard</h4>
                    <p>This section shows metrics and summary cards for the system.</p>
                    <img class="folder-img" src="${publicUrl}/csfs/dashboard/dashboard 1.png" alt="Dashboard preview" />
                    <img class="folder-img" src="${publicUrl}/csfs/dashboard/dashboard 2.png" alt="Dashboard preview" />
                    <img class="folder-img" src="${publicUrl}/csfs/dashboard/dashboard 3.png" alt="Dashboard preview" />
                    <img class="folder-img" src="${publicUrl}/csfs/dashboard/dashboard 4.png" alt="Dashboard preview" />
                    <div style="margin-top: 0.75rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                        
                    </div>
                </div>
            </details>
            <details class="subfolder">
                <summary>Forms</summary>
                <div class="folder-item">
                    <h4>Forms</h4>
                    <p>This section contains forms for submitting data, requests, or feedback.</p>
                    <img class="folder-img" src="${publicUrl}/csfs/form/form 1.png" alt="Forms preview" />
                    <img class="folder-img" src="${publicUrl}/csfs/form/form 2.png" alt="Forms preview" />
                    <img class="folder-img" src="${publicUrl}/csfs/form/form 3.png" alt="Forms preview" />
                    <img class="folder-img" src="${publicUrl}/csfs/form/form 4.png" alt="Forms preview" />
                    <img class="folder-img" src="${publicUrl}/csfs/form/form 5.png" alt="Forms preview" />
                    <img class="folder-img" src="${publicUrl}/csfs/form/form 6.png" alt="Forms preview" />
                    <img class="folder-img" src="${publicUrl}/csfs/form/form 7.png" alt="Forms preview" />
                    <img class="folder-img" src="${publicUrl}/csfs/form/form 8.png" alt="Forms preview" />
                </div>
            </details>
            <details class="subfolder">
                <summary>Reports</summary>
                <div class="folder-item">
                    <h4>Reports</h4>
                    <p>This section contains generated reports, downloadable summaries and printable.</p>
                    <img class="folder-img" src="${publicUrl}/csfs/reports/report 1.png" alt="Reports preview" />
                    <img class="folder-img" src="${publicUrl}/csfs/reports/report 2.png" alt="Reports preview" />
                </div>
            </details>
        </details>
    </section>
</div>
`;

export default contentContent;
