import { useState } from "react";
import { greeting } from "./greeting";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>{greeting("reviewer")}</h1>
      <p>Clicks: {count}</p>
      <button type="button" onClick={() => setCount((value) => value + 1)}>
        Add click
      </button>
    </main>
  );
}
