import { Router } from 'express';

export const tracksRouter = Router();

tracksRouter.post('/upload', async (req, res) => {
  console.log(req.body)
  res.status(201).json({ trackId: 0 });
});
