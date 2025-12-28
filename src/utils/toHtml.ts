import { ServerResponse } from "http";

interface ToHtmlOptions {
  tag?: string;
  text?: string;
  attr?: Record<string, string | number>;
}

/**
 * Writes an HTML element to the response stream.
 * @param res - response object
 * @param options - options object
 * @param options.tag - tag name of the element
 * @param options.text - inner text of the element
 * @param options.attr - attributes of the element
 */
export function toHtml(
  res: ServerResponse,
  { tag = "div", text = "", attr = {} }: ToHtmlOptions = {}
): void {
  res.write(
    `<${tag} ${Object.entries(attr)
      .map(([key, value]) => `${key}="${value}"`)
      .join(" ")}>${text}</${tag}>`
  );
}

