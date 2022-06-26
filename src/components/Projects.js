import React from "react";
import Card from "./UI/Card";

export default function Project(props) {
  return (
    <div id="projects">
      <Card mode={props.mode}></Card>
    </div>
  );
}
