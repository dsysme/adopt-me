import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = function App() {
  return (
    <div>
      <h1>"Adopt Me!"</h1>
      <Pet name="Luna" animal="Dog" bread="Havanese"></Pet>
      <Pet name="Paper" animal="Bird" bread="coctail"></Pet>
      <Pet name="Dodli" animal="Cat" bread="Mixed"></Pet>
    </div>
  );
};

render(<App />, document.getElementById("root"));
