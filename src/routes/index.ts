import { Router, Request, Response } from 'express';
import PingController from '../controllers/ping';

const router = Router();

router.get('/ping', async (_req: Request, res: Response) => {
  const controller = new PingController();
  const response = await controller.getMessage();
  return res.send(response);
});

export default router;
