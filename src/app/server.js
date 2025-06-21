import http from "http";
import fs from "fs/promises";
import path from "path";

import { toHtml } from "../utils/toHtml.js";

const __PORT__ = 3000;
const __dirname = path.resolve();

const server = http.createServer(async (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  switch (req.url) {
    case "/":
    case "/home":
        const data = await fs.readFile(path.join(__dirname, "src", "static", "index.html"),"utf-8");
        res.write(data);

        res.end();
    break;
  }
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:${__PORT__}`);
});
