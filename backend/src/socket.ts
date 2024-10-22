import { Server } from "socket.io";

const io = new Server(8080, {
  cors: {
    origin: "*",
  },
});

io.on("connect", (socket) => {
  console.log(`Socket is connected socket id: ${socket.id}`);
  console.log(socket.rooms);
  io.on("disconnect", () => {
    console.log(`Socket is disconnected`);
  });
});
