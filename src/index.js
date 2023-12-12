// index.js
// import { Greeting, UserCard } from "./Greeting.js";
// import Product, {NavBar} from "./Product.js";

// const { Greeting, UserCard } = require("./Greeting.js");

// const Product = require("./Product.js").default;
// const { NavBar } = require("./Product.js");

// ECMAScript6 Modules
import { Greeting, UserCard } from "./Greeting";
import { NavBar } from "./Product";
import Product from "./Product";

// CommonJS Modules
// const { Greeting } = require("./Greeting");
// const { UserCard } = require("./Greeting");
// const Product = require("./Product").default;
// const { NavBar } = require("./Product");

const React = require("react");
const ReactDOM = require("react-dom/client");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <NavBar />
    <Product />
    <Greeting />
    <UserCard />
    <Greeting />
  </>
);
