import { previewHtml } from "./notes";

export function Notes({ notes, filter }: { notes: string[]; filter: string }) {
  console.log("rendering notes", notes.length);
  const shown = notes.filter((note) => note.toLowerCase().includes(filter.toLowerCase()));

  return (
    <ul>
      {shown.map((note, index) => (
        <li key={index} dangerouslySetInnerHTML={{ __html: previewHtml(note) }} />
      ))}
    </ul>
  );
}
