import express from "express";
import http from "http";
import { Server as SocketIOServer } from "socket.io";

// Create an instance of Express
const app = express();
const port = 3000;

// Create an HTTP server and pass it to Socket.IO
const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: {
    origin: "*", // Adjust this based on your needs
  },
});

// Middleware (if needed)
app.use(express.json());

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Set up Socket.IO event listeners
io.on("connection", (socket) => {
  console.log("a user connected");

  // Event listener for 'message' event
  socket.on("message", (msg) => {
    console.log("message received: ", msg);
    // Broadcast message to all clients
    io.emit("message", msg);
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
