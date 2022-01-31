import app from './server'
import { client } from '../routes'
import { Request, Response } from 'express'

import { seedling } from '../model'

seedling();

app.get('/', (req: Request, res: Response) => {
  res.status(200).send({ message: 'Hello World' });
});

app.use('/clients', client);