import { useState } from "react";
import { nextCount, resetCount } from "./counter";
import { formatCount } from "./formatCount";
import { greeting } from "./greeting";
import { Notes } from "./Notes";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>{greeting("reviewer")}</h1>
      <p>{formatCount(count)}</p>
      <button type="button" onClick={() => setCount((value) => nextCount(value))}>
        Add click
      </button>
      <button type="button" onClick={() => setCount(resetCount())}>
        Reset
      </button>
      <Notes notes={["Alpha", "beta", "alphabet"]} filter="" />
    </main>
  );
}
