import React from "react";
import "../components/SocialStyle.css";


export default function Social(props) {
  return (
    <>
      <div className="container my-5" id="contact" style={{ height: "70vh" }}>
        <h1
          style={{
            color: props.mode === "Dark" ? "white" : "black",
            fontFamily: "'Press Start 2P', cursive",
          }}
        >
          ContactMe()
        </h1>

        <ul className="nav footer-main-links row text-center text-uppercase my-5">
          <li className="nav-item col col-md">
            <a href="https://twitter.com/kumar_r1tesh">
              <i
                className="fab fa-twitter-square"
                style={{ color: "#1597E5", fontSize: "40px" }}
              ></i>
            </a>
          </li>
          <li className="nav-item col col-md">
            <a href="https://www.linkedin.com/in/riteshsahu1508/">
              <i
                className="fab fa-linkedin"
                style={{ color: "#0F52BA", fontSize: "40px" }}
              ></i>
            </a>
          </li>
          <li className="nav-item col col-md">
            <a href="https://github.com/Reeetesh">
              <i
                className="fab fa-github-square"
                style={{
                  color: props.mode === "Dark" ? "white" : "black",
                  fontSize: "40px",
                }}
              ></i>
            </a>
          </li>
          <li className="nav-item col col-md">
            <a href="https://www.instagram.com/fotoberrry/">
              <i
                className="fab fa-instagram"
                style={{ color: "#F8485E", fontSize: "40px" }}
              ></i>
            </a>
          </li>
          <li className="nav-item col col-md">
            <a href="/review/">
              <i
                className="far fa-envelope"
                style={{ color: "#FF3F00", fontSize: "40px" }}
              ></i>
            </a>
          </li>
          <li className="nav-item col col-md">
            <a href="/review/">
              <i
                className="fas fa-phone-square-alt"
                style={{ color: "#50CB93", fontSize: "40px" }}
              ></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
