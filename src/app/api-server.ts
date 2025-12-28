import http, { IncomingMessage, ServerResponse } from "http";
import { toJson } from "../utils/toJson.js";

const __PORT__ = 3001;

interface TaxiItem {
  id: number;
  name: string;
  price: number;
  car: string;
  driver: string;
}

const apiServer = http.createServer(
  async (req: IncomingMessage, res: ServerResponse) => {
    let data: TaxiItem[] | { error: string };

    switch (req.url) {
      case "/api/taxi":
        data = [
          { id: 1, name: "Taxi 1", price: 100, car: "BMW", driver: "John" },
          { id: 2, name: "Taxi 2", price: 200, car: "Audi", driver: "Jane" },
          { id: 3, name: "Taxi 3", price: 300, car: "Mercedes", driver: "Bob" },
        ];
        break;
      default:
        data = { error: "Not found" };
    }

    res.writeHead(200, {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Content-Type": "application/json",
    });
    res.write(toJson(data));
    res.end();
  }
);

apiServer.listen(__PORT__, () => {
  console.log(`Server running at http://localhost:${__PORT__}`);
});

