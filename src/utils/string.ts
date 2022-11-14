const capitalizeFirstWord = (string: string): string =>
  string.charAt(0).toUpperCase() + string.slice(1);

const getHostname = (string: string): string =>
  string.trim() === "" ? "" : new URL(string).hostname;

const string = {
  capitalizeFirstWord,
  getHostname,
};

export default string;
