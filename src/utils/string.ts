export const capitalizeFirstWord = (string: string): string =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const getHostname = (string: string): string =>
  string.trim() === "" ? "" : new URL(string).hostname;
