import React from "react";

export default function Footer(props) {
  return (
    <div
      style={{
        color: props.mode === "Dark" ? "#FFF338" : "black",
        fontSize: "20px",
        fontWeight: "bold",
      }}
    >
      <p>copyright &copy; 2021 Reeetesh - All rights reserved</p>
    </div>
  );
}
