const redis = require("redis");

function configureRedis() {
  const client = redis.createClient({
    url: `redis://${process.env.REDIS_HOST || "127.0.0.1"}:${
      process.env.REDIS_PORT || 6379
    }`,
  });

  client.on("connect", () => {
    console.log("Connected to Redis");
  });

  client.on("error", (err) => {
    console.error("Redis error:", err);
  });

  return client;
}

module.exports = { configureRedis };
