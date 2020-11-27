import React from "react";

const Pet = function Pet({ name, animal, bread }) {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{animal}</h1>
      <h1>{bread}</h1>
    </div>
  );
};

export default Pet;
