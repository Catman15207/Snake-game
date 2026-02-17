import "./App.css";
import { useEffect } from "react";
import Display from "./ConsoleDisplay";
import display from "./display";
import WorldModel from "./WorldModel";
// import Car from "./Car";
// import Duck from "./Duck";
import Snake from "./Snake";

export default function App() {
  useEffect(() => {
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("hey");

    const greensnake = new Snake("green");
    const greenWorld = new WorldModel(greensnake);

    display(
      "Green snake moved to",
      greenWorld.snake.currentPosition.x,
      greenWorld.snake.currentPosition.y
    );

    const maroonsnake = new Snake("maroon");
    const maroonWorld = new WorldModel(maroonsnake);

    display(
      "Maroon snake moved to",
      maroonWorld.snake.currentPosition.x,
      maroonWorld.snake.currentPosition.y
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
