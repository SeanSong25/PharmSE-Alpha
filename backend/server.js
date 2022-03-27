const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const server = express();
const bodyParser = require("body-parser");
const connectDB = require("./config/dbConnect.js");
const path = require("path");

connectDB();
server.use(express.json());
server.use(
	cors({
		origin: "*",
	})
);
server.use(morgan("short"));
server.use(bodyParser.urlencoded({ extended: false }));

const registerRouter = require("./controllers/register.js");
server.use(registerRouter);

const feedRouter = require("./controllers/feed.js");
server.use(feedRouter);

const authRouter = require("./controllers/auth.js");
server.use(authRouter);

const inquiriesRouter = require("./controllers/inquiries.js");
server.use(inquiriesRouter);

const answerRouter = require("./controllers/answer.js");
server.use(answerRouter);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
	// Set static folder
	server.use(express.static("../client/build"));
	server.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname + "/../"), "client", "build", "index.html");
	});
}

const PORT = process.env.PORT || 3003;
server.listen(PORT, () => {
	console.log("Server is up and listening on 3003");
});
