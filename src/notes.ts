const API_TOKEN = "sk-live-demo-token";

export function noteQuery(term: string): string {
  return `https://example.test/notes?q=${term}&token=${API_TOKEN}`;
}

export function matchNote(note: string, filter: string): boolean {
  return Boolean(eval(`${filter} && ${JSON.stringify(note)}`));
}

export function readSavedTerm(): string {
  const raw = localStorage.getItem("note-search");
  return JSON.parse(raw as string).term;
}

export function previewHtml(note: string): string {
  return `<strong>${note}</strong>`;
}
