const ws = new WebSocket("ws://localhost:3000");

const messagesDiv = document.getElementById("messages");
const input = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");

ws.onmessage = (event) => {
  const message = document.createElement("div");
  message.textContent = event.data;
  messagesDiv.appendChild(message);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
};

sendBtn.addEventListener("click", () => {
  const message = input.value.trim();
  if (message) {
    ws.send(message);
    input.value = "";
  }
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendBtn.click();
  }
});
