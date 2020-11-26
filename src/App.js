import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      bread: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Papper",
      animal: "Bird",
      bread: "Coctail",
    }),
    React.createElement(Pet, {
      name: "Dodli",
      animal: "Cat",
      bread: "Mixed",
    })
  );
};

render(React.createElement(App), document.getElementById("root"));
