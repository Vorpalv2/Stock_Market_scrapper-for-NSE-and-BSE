import "dotenv/config.js";
import express from "express";
import cors from "cors";
import { scrapScreener } from "./scrapper.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// ------------- Server Setup ------------------------------- //
app.listen(process.env.PORT || 3000, () => {
  if (process.env.PORT === undefined) {
    console.error("Port must be specified, rerouting to PORT 3000 by default");
  } else {
    console.log("backend is running on PORT ", process.env.PORT);
  }
});

// ------------- POST Requests --------------------------------//

app.post(`/form-submit`, async (req, res) => {
  if (!req.body) {
    return res.status(400).send("No form Data Received");
  } else {
    const formData = req.body;
    const { companyName, fileType } = formData;
    console.log(companyName, fileType);
    await scrapScreener(companyName, fileType);
    console.log("Scrap Screener Ran");
    res.send("Success");
  }
});

//--------------GET Requests -------------------------------- //

/*
---------Testing Routes-----------

app.get(`/`, (req, res) => {
  res.send("Welcome");
});

app.post(`/postTest`, (req, res) => {
  res.json({ TEST: "Getting this data throught /test route in backend" });
});

app.post(`/runFunction`, (req, res) => {
  console.log("data in request");
  console.log(req.body);
  res.json({ check: "test" });
});

---------Testing Routes-----------
*/
