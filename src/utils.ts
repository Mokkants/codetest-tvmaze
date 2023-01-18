export const truncateText = (text: string, numChars = 255) =>
  text.length > numChars ? text.slice(0, numChars) + '...' : text;
