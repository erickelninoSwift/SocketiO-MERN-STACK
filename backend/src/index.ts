import express, { Request, Response } from "express";
import cors from "cors";
import getmessageRouter from "./routes";
import "./socket";
const app = express();
const PORT = 8000;
app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:4200",
      "http://localhost:5000",
    ],
  })
);

app.get("/", getmessageRouter);
app.listen(PORT, () => {
  console.log(`Your server is running on PORT : ${PORT}`);
});
