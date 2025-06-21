import http from "http";
//import fs from "fs/promises";
import fs from "fs";
import path from "path";


const __PORT__ = 3000;
const __dirname = path.resolve();

const server = http.createServer(async (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
  

  switch (req.url) {
    case "/":
    case "/home":
        //const data = await fs.readFile(path.join(__dirname, "src", "static", "index.html"),"utf-8");

        fs.createReadStream(path.join(__dirname, "src", "static", "index.html")).pipe(res);
        
    break;
  }
});

server.listen(__PORT__, () => {
  console.log(`Server running at http://localhost:${__PORT__}`);
});
