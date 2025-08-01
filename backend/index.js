import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());

app.get("/api/user", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./data.json"));
  res.json(data);
});

app.listen(5000, () => {
  console.log("Backend running at http://localhost:5000");
});
