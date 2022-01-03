import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import config from "config";
import socket from "./socket";
const corsOrigin = config.get<string>("corsOrigin");
const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
	cors: {
		origin: corsOrigin,
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
