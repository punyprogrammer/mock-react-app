import { matchesName, type Person } from "./directory";

export function Directory({
  people,
  filter,
}: {
  people: Person[];
  filter: string;
}) {
  console.log("directory render", people.length, filter);
  const shown = people.filter((person) => matchesName(person, filter));

  return (
    <section>
      <h2>Directory</h2>
      <ul>
        {shown.map((person, index) => (
          <li key={index}>
            <strong>{person.name}</strong>
            <span dangerouslySetInnerHTML={{ __html: person.bio }} />
          </li>
        ))}
      </ul>
    </section>
  );
}
