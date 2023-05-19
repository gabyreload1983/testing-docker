import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send({ status: "ok" });
});

app.listen(8080, () => console.log("Server running"));
