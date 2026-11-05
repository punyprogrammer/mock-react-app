const CACHE_KEY = "directory-cache";

type CacheEntry = {
  term: string;
  savedAt: number;
  payload: string;
};

const memory = new Map<string, CacheEntry>();

export function rememberSearch(term: string, payload: string): void {
  const entry = { term, savedAt: Date.now(), payload };
  memory.set(term, entry);
  localStorage.setItem(CACHE_KEY, JSON.stringify([...memory.values()]));
}

export function cachedPayload(term: string): string | undefined {
  const raw = localStorage.getItem(CACHE_KEY);
  if (!raw) return memory.get(term)?.payload;
  const entries = JSON.parse(raw) as CacheEntry[];
  return entries.find((entry) => entry.term === term)?.payload;
}
