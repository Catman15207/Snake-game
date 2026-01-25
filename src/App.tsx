import "./App.css";
import { useEffect } from "react";
import Display from "./ConsoleDisplay";
import display from "./display";
// import Car from "./Car";
// import Duck from "./Duck";
import Snake from "./Snake";

export default function App() {
  useEffect(() => {
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("hey");

    const greensnake = new Snake("green");
    greensnake.move(5);
    greensnake.turn();
    greensnake.move(10);
    display("Green snake has moved a total of", greensnake.position, "squares");

    const maroonsnake = new Snake("maroon");
    maroonsnake.move(15);
    maroonsnake.turn();
    maroonsnake.move(20);
    maroonsnake.turn();
    maroonsnake.move(10);
    display(
      "Maroon snake has moved a total of",
      maroonsnake.position,
      "squares"
    );
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Display />
    </div>
  );
}
