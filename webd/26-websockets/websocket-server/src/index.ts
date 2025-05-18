// code without HTTP Servers

import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

// event handler
wss.on("connection", (socket) => {
  console.log("user connected");
  //   setInterval(() => {
  //     socket.send(`Current Price of Solana is ${Math.random() * 250}$`);
  //   }, 10000);
  socket.send("hello");

  socket.on("message", (e) => {
    // console.log(e.toString());

    //     if (e.toString().includes("price"))
    //       socket.send(`Current Price of Solana is ${Math.random() * 250}`);
    //   });

    if (e.toString() === "ping") {
      socket.send("pong");
    } else {
      socket.send(`You said "${e.toString()}"`);
    }
  });
});
