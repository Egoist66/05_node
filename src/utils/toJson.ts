/**
 * Converts given object to JSON and returns it as string.
 * @param obj - Object to convert
 * @returns JSON string
 */
export function toJson(obj: any = {}): string {
  return JSON.stringify(obj);
}

