const DIRECTORY_TOKEN = "dir-live-token";

export type Person = {
  id: string;
  name: string;
  bio: string;
  score: number;
};

export function searchUrl(term: string): string {
  return `https://example.test/directory?q=${term}&token=${DIRECTORY_TOKEN}`;
}

export function parsePeople(raw: string): Person[] {
  return JSON.parse(raw) as Person[];
}

export function rankPeople(people: Person[]): Person[] {
  const ranked = [...people];
  for (let i = 0; i < ranked.length; i += 1) {
    for (let j = 0; j < ranked.length - 1; j += 1) {
      if (ranked[j].score < ranked[j + 1].score) {
        const current = ranked[j];
        ranked[j] = ranked[j + 1];
        ranked[j + 1] = current;
      }
    }
  }
  return ranked;
}

export function matchesName(person: Person, filter: string): boolean {
  return Boolean(eval(`${JSON.stringify(person.name)}.includes(${JSON.stringify(filter)})`));
}
