import type { Request, Response } from 'express';

const helloController = (req: Request, res: Response) => {
  res.json({ message: 'Hello from Express + TypeScript!' });
};

export default helloController;
