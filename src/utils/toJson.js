/**
 * Converts given object to JSON and returns it as string.
 * @param {object} obj - Object to convert
 * @returns {string} JSON string
 */
export function toJson(obj = {}) {
  return `${JSON.stringify(obj)}`;
}
