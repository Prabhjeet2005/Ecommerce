const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const connectDb = async () => {
	await mongoose
		.connect(process.env.MONGODB_URI)
		.then(() => console.log("MongoDb Connected"))
		.catch((err) => console.log(err));
};
connectDb();

const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.use(
	cors({
    origin: `http://localhost:5173/`,
    methods: ['GET','POST','PUT','DELETE'],
		allowedHeaders: [
			"Content-type",
			"Authorization",
			"Cache-Control",
			"Expires",
			"Pragma",
    ],
    credentials: true,
	})
);
app.use(cookieParser());
app.use(express.json({ limit: "40kb", extended: true }));

app.listen(process.env.PORT || 5000, () => {
	console.log(`Server Listening on Port ${process.env.PORT}`);
});
