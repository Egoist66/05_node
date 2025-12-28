import http, { IncomingMessage, ServerResponse } from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __PORT__ = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(
  async (req: IncomingMessage, res: ServerResponse) => {
    switch (req.url) {
      case "/":
      case "/home":
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream(
          path.join(__dirname, "..", "..", "src", "static", "index.html")
        ).pipe(res);
        break;
      case "/app.js":
        res.writeHead(200, { "Content-Type": "application/javascript" });
        fs.createReadStream(
          path.join(__dirname, "..", "..", "src", "static", "app.js")
        ).pipe(res);
        break;
      default:
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 Not Found</h1>");
    }
  }
);

server.listen(__PORT__, () => {
  console.log(`Server running at http://localhost:${__PORT__}`);
});

