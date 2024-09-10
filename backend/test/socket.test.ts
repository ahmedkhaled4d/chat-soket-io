import { expect } from "chai";
import { io, Socket } from "socket.io-client";
import http from "http";
import { Server as SocketIOServer } from "socket.io";
import express from "express";

// Set up a basic Express server with Socket.IO
const app = express();
const server = http.createServer(app);
const ioServer = new SocketIOServer(server, {
  cors: {
    origin: "*",
  },
});

// Socket.IO event handling
ioServer.on("connection", (socket: Socket) => {
  console.log("a user connected");
  socket.on("message", (msg: string) => {
    console.log("message received: ", msg);
    ioServer.emit("message", msg);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

// Start the server
server.listen(4000);

// Test cases
describe("Socket.IO server", () => {
  let clientSocket: Socket;

  before((done) => {
    // Wait for the server to start
    server.once("listening", done);
  });

  beforeEach((done) => {
    clientSocket = io("http://localhost:4000");
    clientSocket.on("connect", () => done());
  });

  afterEach(() => {
    clientSocket.disconnect();
  });

  it("should receive and broadcast messages", (done) => {
    const testMessage = "Hello World";
    clientSocket.on("message", (msg: string) => {
      try {
        expect(msg).to.equal(testMessage);
        done();
      } catch (err) {
        done(err);
      }
    });

    clientSocket.emit("message", testMessage);
  });

  after((done) => {
    server.close(done);
  });
});
