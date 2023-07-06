const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/todos.routes");
require('dotenv').config();

const PORT = process.env.PORT ?? 8000;

const app = express();

app.use(express.json());
app.use(cors());

app.use(userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to my server");
});

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
