const Pet = ({ name, animal, bread }) => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, bread)
  );
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
