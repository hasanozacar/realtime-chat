
# Real-Time Chat Application

This project demonstrates a real-time chat application using **WebSockets** and **Redis** for communication and scalability.

## Features

- Real-time messaging with WebSocket.
- Redis for publish/subscribe functionality.
- Simple and modern user interface.

---

## Prerequisites

Before running the project, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v20.3.1 or higher)
- [Redis](https://redis.io/) (v6 or higher)

---

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/username/realtime-chat.git
cd realtime-chat
```

### 2. Set Up the Server
Navigate to the `server` directory and install dependencies:
```bash
cd server
npm install
```

### 3. Start Redis Server
Run the Redis server:
```bash
redis-server
```

### 4. Configure Environment Variables
Create a `.env` file in the `server` directory with the following content:
```
PORT=3000
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
```

### 5. Start the Server
Run the Node.js server:
```bash
node app.js
```

### 6. Access the Client
The client is a static HTML file located in the `client` directory. Open the `index.html` file in a browser.

---

## Usage

1. Open the chat application in your browser at `http://localhost:3000`.
2. Enter messages in the input field and click **Send** to communicate in real-time.
3. Messages from other users will appear instantly.

---

## File Structure

```
realtime-chat/
├── server/
│   ├── app.js           # Main server file
│   ├── redisConfig.js   # Redis configuration
│   ├── socket.js        # WebSocket setup
│   ├── package.json     # Server dependencies
│   └── .env             # Environment variables
├── client/
│   ├── index.html       # Main client HTML
│   ├── style.css        # Client styles
│   └── script.js        # Client-side JavaScript
└── README.md            # Project documentation
```

---

## License

This project is licensed under the MIT License.

---

## Contributions

Contributions are welcome! Please feel free to submit a pull request.

---

## Contact

For any questions, feel free to contact the project maintainer.

