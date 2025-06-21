




/**
 * Writes an HTML element to the response stream.
 * @param {http.ServerResponse} res - response object
 * @param {object} [options] - options object
 * @param {string} [options.tag] - tag name of the element
 * @param {string} [options.text] - inner text of the element
 * @param {object} [options.attr] - attributes of the element
 */
export function toHtml(res, { tag = 'div', text = '', attr = {}}) {
 
  res.write(`<${tag} ${Object.entries(attr).map(([key, value]) => `${key}="${value}"`).join(' ')}>${text}</${tag}>`);
}
