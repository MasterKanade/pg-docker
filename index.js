const express = require("express");

const app = express();

// express framework will take a request and send the response
app.get("/", (req, res) => {
  res.json({ message: "Hello From Mayur Docker. 🐳" });
});

// application will be listened inside the container on this given port
app.listen(9000, () => console.log("Server is running at port 9000"));
