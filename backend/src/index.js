const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:4200",
      "http://localhost:5000",
    ],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 8000;

app.get("/", (request, response) => {
  return response.json({
    message: "hello world ",
  });
});

app.listen(PORT, () => {
  console.log(`Your server is running on PORT : ${PORT}`);
});
