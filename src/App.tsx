import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fn = () => {
    setResult("");
    setIsLoading(true);

    const worker = new Worker(new URL("./worker.ts", import.meta.url));
    worker.postMessage(null);

    worker.onmessage = function (e) {
      setIsLoading(false);
      setResult(e.data);
    };
  };

  return (
    <div className="App">
      <header className="App-header">
        {result}
        {isLoading && <img src={logo} className="App-logo" alt="logo" />}
        <button onClick={fn}>Start</button>
      </header>
    </div>
  );
}

export default App;
