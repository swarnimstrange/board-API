const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8000;

const url = "mongodb://localhost/boardDB";

const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected...");
});

app.use(express.json());

const boardRouter = require("./routes/board");
app.use("/boards", boardRouter);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
