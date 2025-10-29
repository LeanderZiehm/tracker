// storage.js
const STORAGE_KEY = 'trackables';

export function getItems() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function saveItem(item) {
  const items = getItems();
  items.push(item);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function clearItems() {
  localStorage.removeItem(STORAGE_KEY);
}

// later you could replace these with SQL fetch/insert functions.
