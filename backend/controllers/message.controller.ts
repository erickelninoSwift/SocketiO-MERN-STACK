const handleSendMessage = async (request: Request, response: Response) => {
  response.json({ message: "message was sent" });
};

export default handleSendMessage;
