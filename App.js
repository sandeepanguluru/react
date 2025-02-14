const parent = React.createElement(
  "div",
  { id: "parent", className: "parentClass" },
  [
    React.createElement("h1", { id: "child" }, "This is h1  --1"),
    React.createElement("h2", { id: "child2" }, "this is child 2"),
  ],
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { className: "react" }, "Namaste React")
  )
);

// const heading = React.createElement("h1", { id: "header" }, "Hello React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
