const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// pas utile
//const path = require('path');
require("dotenv").config();

const todoListRoutes = require('./routes/api/TodoList');

const server = express();
const bodyParser = require("body-parser");

server.use(cors);
// convert request into json mais pas besoin y'a axios ?!
server.use(bodyParser.json());
server.use(todoListRoutes);

mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
	.catch(e => console.error(e));

server.get('/', (req, res) => {
	res.status(200).send("Welcome on MEVN server");
})

server.listen(process.env.PORT, () => {
	console.log(`Sserver started on port ${process.env.PORT}`);
})