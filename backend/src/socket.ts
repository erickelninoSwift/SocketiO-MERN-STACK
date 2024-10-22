import { Server } from "socket.io";

const io = new Server(5000, {
  cors: {
    origin: "*",
  },
});

io.on("connect", (socket) => {
  console.log(`Connected socket id: ${socket.id}`);

  io.on("disconnect", () => {
    console.log(`Socket disconnected socket id  : ${socket.id}`);
  });
});
