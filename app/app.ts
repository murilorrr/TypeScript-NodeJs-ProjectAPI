import app from './server'
import { Request, Response } from 'express'

app.get('/ping/', (req: Request, res: Response) => {
  res.status(200).send({ message: 'pong' });
});