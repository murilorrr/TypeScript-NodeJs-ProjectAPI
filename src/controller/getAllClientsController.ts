import getAllClientsService from '../service'
import { NextFunction, Response, Request } from 'express';
import {StatusCodes} from 'http-status-codes'

const getAllClientsController = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await getAllClientsService();
    // const result = 4;
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    return next(err);
  }
}

export default getAllClientsController;