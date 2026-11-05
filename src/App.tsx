import { useState } from "react";
import { nextCount, resetCount } from "./counter";
import { formatCount } from "./formatCount";
import { Directory } from "./Directory";
import { type Person } from "./directory";
import { greeting } from "./greeting";

const PEOPLE: Person[] = [
  { id: "1", name: "Ada", bio: "Counts things", score: 2 },
  { id: "2", name: "Lin", bio: "Resets counters", score: 5 },
];

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
      <Directory people={PEOPLE} filter="" />
    </main>
  );
}
