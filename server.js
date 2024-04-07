const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const next = require("next");
const { MongoClient, ObjectId } = require("mongodb");
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const PORT = process.env.PORT || 3000;
const url =
  "mongodb+srv://theweeknd982:rh09m7HxIcJx6vcJ@cluster0.dw2lgdv.mongodb.net/";
const dbName = "forum";
async function connectToDatabase() {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return client.db(dbName);
}
nextApp.prepare().then(async () => {
  const app = express();
  const server = createServer(app);
  const io = new Server(server);
  const db = await connectToDatabase();
  io.on("connection", (socket) => {
    console.log("연결완료");

    // 클라이언트로부터 메시지 수신
    socket.on("message", async (message) => {
      console.log("Message from client: ", message);

      await db.collection("chat").insertOne({
        content: message.message,
        participation_users: message.session.user.name,
        participation_users_id: message.session.user.name,
        parent: new ObjectId(message.parentId),
        publishDate: new Date(),
      });
      io.emit("message", message);
    });
    socket.on("message", (newMessage) => {
      console.log("Received message from client:", newMessage);
    });
  });

  // Next.js의 요청 처리
  app.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
