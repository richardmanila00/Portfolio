import React, { useEffect, useState } from "react";
import "./Files/css/index.css";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setSidebarOpen(false);
    }
  }, [isMobile]);

  const navLinks = [
    { href: "#CoverPage", icon: "dashboard", label: "Cover Page" },
    { href: "#Resume", icon: "group", label: "Resume" },
    { href: "#Certifications", icon: "groups", label: "Certifications" },
    { href: "#Award", icon: "paid", label: "Award" },
    { href: "#Contents", icon: "local_shipping", label: "Contents" },
  ];

  return (
    <div className={`app ${sidebarOpen ? "sidebar-open" : ""}`}>
      <nav className="topbar d-flex align-items-center bg-color text-color">
        <div className="nav-brand d-flex align-items-center">
          <a href="#">
            <img
              className="img-1"
              src={process.env.PUBLIC_URL + "/logo192.png"}
              alt="logo192"
              style={{ width: "50px", height: "60px", objectFit: "contain" }}
            />
          </a>
          <label className="px-4 fs-4">My Portfolio</label>
        </div>

        {isMobile && (
          <button
            className="burger-btn"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open navigation"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        )}
      </nav>

      {isMobile && sidebarOpen && (
        <div className="sidebar-backdrop" onClick={() => setSidebarOpen(false)} />
      )}

      <div className="layout">
        <aside className={`sidebar ${isMobile ? "mobile" : "desktop"} ${sidebarOpen ? "open" : ""}`}>
          {isMobile && (
            <button
              className="sidebar-close"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close navigation"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          )}

          <ul className="list-group list-unstyled">
            {navLinks.map((item) => (
              <li key={item.href} className="mt-3">
                <a href={item.href} className="d-flex align-items-center list-group-item bg-color-1">
                  <span className="material-symbols-outlined px-3">{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <main className="content">
          <div id="main-page"></div>
        </main>
      </div>
    </div>
  );
};

export default App;
