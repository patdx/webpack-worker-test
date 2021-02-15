// import { hello } from "./shared";

// hello();

console.log("this is the worker");

 import("./shared").then((m) => m.hello());

