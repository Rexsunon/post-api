import { Request, Response, Router, NextFunction } from 'express';

import UserController from './UserController';

const router = Router();

router.get('/', async (_req: Request, res: Response, _next: NextFunction) => {
  const controller = new UserController();
  const response = await controller.getUsers();
  return res.status(200).json({ success: true, data: response });
});

router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
  const controller = new UserController();
  const response = await controller.createUser(req.body);
  return res.status(201).json({ success: true, data: response });
});

router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
  const controller = new UserController();
  const response = await controller.getUser(Number(req.params.id));
  if (!response)
    res
      .status(404)
      .json({ success: false, message: 'User not found', data: {} });
  return res.status(200).json({ success: true, data: response });
});

export default router;
