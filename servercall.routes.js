import express from "express";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.listen(3000, () => {
  console.log("backend is running on PORT 3000");
});

app.get(`/runData`, (req, res) => {
  console.log("data ran from runData");
});

app.get(`/test`, (req, res) => {
  res.json({ TEST: "Getting this data throught /test route in backend" });
});
