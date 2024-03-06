const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello From Mayur Docker. 🐳" });
});

app.listen(9000, () => console.log("Server is running at port 9000"));
