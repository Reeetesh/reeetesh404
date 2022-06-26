import React from "react";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg  fixed-top navbar-dark bg-dark">
      <div
        className="container-fluid"
        style={{ fontFamily: "'Josefin Sans', sans-serif" }}
      >
        <a className="navbar-brand" href="/" style={{ color: "#FFE459" }}>
          Reeetesh <i class="far fa-laugh"></i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#home"
                style={{ color: "#FF6B6B" }}
              >
                .Home()
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#projects"
                style={{ color: "skyblue" }}
              >
                .Projects()
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#skills"
                style={{ color: "#28FFBF" }}
              >
                .Skills()
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#about"
                style={{ color: "#F6AE99" }}
              >
                .AboutMe()
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#contact"
                style={{ color: "#FDF6F0" }}
              >
                .ContactMe()
              </a>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
              style={{ color: "whitesmoke" }}
            >
              {props.mode}mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
