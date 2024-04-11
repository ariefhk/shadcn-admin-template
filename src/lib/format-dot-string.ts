export const formatDotString = (string: string, longOfString: number) => {
  return string.length < longOfString ? string : string.substring(0, longOfString) + "...";
};
