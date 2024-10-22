import express, { Request, Response } from "express";
import cors from "cors";

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

app.get("/", (request: express.Request, response: express.Response) => {
  response.status(200).json("Hello world");
});
app.listen(PORT, () => {
  console.log(`Your server is running on PORT : ${PORT}`);
});
