import express, { Request, Response } from "express";
const handleSendMessage = async (request: Request, response: Response) => {
  return response.json({
    message: "message sent ",
  });
};

export default handleSendMessage;
