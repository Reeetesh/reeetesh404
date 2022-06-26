import React from "react";
import Typewriter from "typewriter-effect";

export default function Hero(props) {
  return (
    <div className="p-3 mb-4" id="home">
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="p-2 bd-highlight col-example">
          <h1
            style={{
              fontFamily: "'Press Start 2P', cursive",
              color: props.mode === "Dark" ? "rgb(0, 255, 43)" : "#000",
            }}
          >
            <Typewriter
              options={{
                strings: ["HELLO WORLD!", "THIS IS MY SPACE "],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
      </div>
    </div>
  );
}
