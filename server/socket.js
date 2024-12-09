async function setupSocket(wss, redisClient) {
  const subscriber = redisClient.duplicate();
  await subscriber.connect();

  await subscriber.subscribe("chat_channel", (message) => {
    console.log(`Received from Redis: ${message}`);
    wss.clients.forEach((client) => {
      if (client.readyState === client.OPEN) {
        client.send(message);
      }
    });
  });

  wss.on("connection", (ws) => {
    console.log("New client connected!");

    ws.on("message", async (message) => {
      console.log("Received:", message);

      if (!redisClient.isOpen) {
        console.error("Redis client is closed, message not published.");
        return;
      }

      try {
        await redisClient.publish("chat_channel", message);
      } catch (err) {
        console.error("Failed to publish message to Redis:", err);
      }
    });

    ws.on("close", () => {
      console.log("Client disconnected!");
    });
  });
}

module.exports = { setupSocket };
