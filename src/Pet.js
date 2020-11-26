import React from "react";

const Pet = function Pet({ name, animal, bread }) {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, bread)
  );
};

export default Pet;
