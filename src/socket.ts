import { nanoid } from "nanoid";
import { Server, Socket } from "socket.io";
import logger from "./utils/logger";

function socket({ io }: { io: Server }) {
	logger.info(`Sockets enabled`);

	io.on("connection", (socket: Socket) => {
		logger.info(`User connected ${socket.id}`);

		socket.on("datatest", ({ test, orderId }) => {
			socket.emit("afterCheck", {
				message: "thanh toan thanh cong",
				orderId: orderId,
			});
		});
	});
}

export default socket;
