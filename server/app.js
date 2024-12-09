const http = require("http");
const WebSocket = require("ws");
const { configureRedis } = require("./redisConfig");
const { setupSocket } = require("./socket");

require("dotenv").config();

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("WebSocket Server Running");
});

const wss = new WebSocket.Server({ server });

(async () => {
  const redisClient = configureRedis();

  try {
    if (!redisClient.isOpen) {
      await redisClient.connect();
    }

    setupSocket(wss, redisClient);

    server.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
  }
})();
