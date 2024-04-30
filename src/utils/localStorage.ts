export const setLocalStorage = <T>(key: string, data: T) => {
  const jsonString = JSON.stringify(data);
  localStorage.setItem(key, jsonString);
};

export const getLocalStorageData = <T>(key: string): T | null => {
  const jsonString = localStorage.getItem(key);
  if (!jsonString) return null;

  return JSON.parse(jsonString);
};

export const resetLocalStorageData = (key: string) => {
  localStorage.removeItem(key);
};
