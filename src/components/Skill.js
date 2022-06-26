import React from "react";

export default function Skill(props) {
  return (
    <section className="d-flex" id="skills" style={{ height: "70vh" }}>
      <div className="container p-5 my-5 align-self-center">
        <h1
          style={{
            color: props.mode === "Dark" ? "white" : "black",
            fontFamily: "'Press Start 2P', cursive",
          }}
        >
          Skills()
        </h1>
        <div className="row gx-5">
          <div className="col" style={{ color: "#fff" }}>
            <div className="p-3 ">
              <ul className="nav footer-main-links row text-center text-uppercase">
                <li className="nav-item col col-md">
                  <a
                    href="https://www.w3schools.com/html/"
                    style={{
                      textDecoration: "none",
                      color: props.mode === "Dark" ? "white" : "black",
                    }}
                  >
                    <i
                      className="fab fa-html5"
                      style={{ color: "#FF0000", fontSize: "30px" }}
                    ></i>
                    <br />
                    HTML
                  </a>
                </li>
                <li className="nav-item col col-md">
                  <a
                    href="https://www.w3schools.com/css/"
                    style={{
                      textDecoration: "none",
                      color: props.mode === "Dark" ? "white" : "black",
                    }}
                  >
                    <i
                      className="fab fa-css3-alt"
                      style={{ color: "#1597E5", fontSize: "30px" }}
                    ></i>
                    <br />
                    CSS
                  </a>
                </li>
                <li className="nav-item col col-md">
                  <a
                    href="https://www.javascript.com/"
                    style={{
                      textDecoration: "none",
                      color: props.mode === "Dark" ? "white" : "black",
                    }}
                  >
                    <i
                      className="fab fa-js-square"
                      style={{ color: "#FFB319", fontSize: "30px" }}
                    ></i>
                    <br />
                    JavaScript
                  </a>
                </li>
                <li className="nav-item col col-md">
                  <a
                    href="https://reactjs.org/docs/getting-started.html"
                    style={{
                      textDecoration: "none",
                      color: props.mode === "Dark" ? "white" : "black",
                    }}
                  >
                    <i
                      className="fab fa-react"
                      style={{ color: "#1597E5", fontSize: "30px" }}
                    ></i>
                    <br />
                    React
                  </a>
                </li>
                <li className="nav-item col col-md">
                  <a
                    href="https://nodejs.org/en/docs/"
                    style={{
                      textDecoration: "none",
                      color: props.mode === "Dark" ? "white" : "black",
                    }}
                  >
                    <i
                      className="fab fa-node-js"
                      style={{ color: "green", fontSize: "30px" }}
                    ></i>
                    <br />
                    Node Js
                  </a>
                </li>
                <li className="nav-item col col-md">
                  <a
                    href="https://www.mongodb.com/"
                    style={{
                      textDecoration: "none",
                      color: props.mode === "Dark" ? "white" : "black",
                    }}
                  >
                    <i
                      className="fas fa-database"
                      style={{ color: "red", fontSize: "30px" }}
                    ></i>
                    <br />
                    MongoDb
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
