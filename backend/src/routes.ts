import express, { Request, Response } from "express";
import handleSendMessage from "../controllers/message.controller";
const router = express.Router();

router.get("/", async (request: Request, response: Response) => {
  const {} = request.body;
  response.json({
    message: "Hello world",
  });
});

router.post("/api/message", handleSendMessage);

export default router;
