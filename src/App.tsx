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
    greensnake.turnLeft();
    greensnake.move(10);
    display(
      "Green snake moved to",
      greensnake.position.x,
      greensnake.position.y
    );

    const maroonsnake = new Snake("maroon");
    maroonsnake.move(30);
    maroonsnake.turnRight();
    maroonsnake.move(2);
    display(
      "Maroon snake moved to",
      maroonsnake.position.x,
      maroonsnake.position.y
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
