import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import { connectDB } from "./db";
import router from "../src/routes/index"



const app = express();
app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());



const PORT = 8002;
// Express route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

connectDB()

app.listen(PORT, () =>
    console.log("server is running on http://localhost:" + PORT)
);


app.use("/", router())
