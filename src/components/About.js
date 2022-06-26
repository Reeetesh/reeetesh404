import React from "react";

export default function About(props) {
  return (
    <section className="about d-flex" id="about" style={{ height: "100vh" }}>
      <div className="container my-3 align-self-center" s>
        <div className="d-flex justify-content-center my-4">
          <img
            src="https://images.unsplash.com/photo-1533518463841-d62e1fc91373?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
            style={{ height: "200px", width: "200px", borderRadius: "50%" }}
          />
        </div>
        <h1
          className="my-3"
          style={{
            color: props.mode === "Dark" ? "white" : "black",
            fontFamily: "'Press Start 2P', cursive",
          }}
        >
          AboutMe()
        </h1>
        <p
          className="my-3"
          style={{
            color: props.mode === "Dark" ? "white" : "black",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          Hi I am 3rd year student at Birla Institute of Technology.I live in
          Jamshedpur(Jharkhand).I am a self taught developer currently learing
          on MERN stack development.I am good at problem solving and I am a team
          player.I love to learn new things and I am always trying to improve my
          skills. I love photography and I am a self taught photographer. Hope
          you like my portfolio. Thank you.
        </p>
      </div>
    </section>
  );
}
