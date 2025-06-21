import http from "http";
import { toJson } from "../utils/toJson.js";

const __PORT__ = 3001;

const apiServer = http.createServer(async (req, res) => {
  let data = { error: "Not found" };
  switch (req.url) {
    case "/api/taxi":
      data = [
        { id: 1, name: "Taxi 1", price: 100, car: "BMW", driver: "John" },
        { id: 2, name: "Taxi 2", price: 200, car: "Audi", driver: "Jane" },
        { id: 3, name: "Taxi 3", price: 300, car: "Mercedes", driver: "Bob" },
      ];
      break;
  }

  res.writeHead(200, {
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Content-Type": "application/json",
  });
  res.write(toJson(data));
  res.end();
});

apiServer.listen(__PORT__, () => {
  console.log(`Server running at http://localhost:${__PORT__}`);
});
