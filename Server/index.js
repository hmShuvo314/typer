const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
app.use(cors());

app.get("/", (_, res) => {
  res.send("Hello!");
});

const member = [];

io.on("connection", (socket) => {
  socket.on("join-user", () => {
    socket.emit("set-user", member);
    socket.broadcast.emit("set-user", member);

    socket.on("set-racing", (done) => {
      console.log(done);
      socket.broadcast.emit("get-racing", done);
    });
    member.push([0]);
  });
});

server.listen(8080, () => console.log("Server is listening on port 8080"));
