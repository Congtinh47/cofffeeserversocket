import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import socket from "./src/socket";
const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
	cors: {
		origin: "http://localhost:3000",
		credentials: true,
	},
});

app.get("/", (_: any, res: any) => {
	res.send(`it working`);
});
const PORT = process.env.PORT || 4000;
httpServer.listen(PORT, () => {
	socket({ io });
});
