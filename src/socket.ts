import { nanoid } from "nanoid";
import { Server, Socket } from "socket.io";

function socket({ io }: { io: Server }) {
	io.on("connection", (socket: Socket) => {
		socket.on("datatest", ({ test, orderId }) => {
			socket.emit("afterCheck", {
				message: "thanh toan thanh cong",
				orderId: orderId,
			});
		});
	});
}

export default socket;
