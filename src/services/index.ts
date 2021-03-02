import { Router, Request, Response } from 'express';

import PingController from '../controllers/ping';
import UserRouter from './user/routes';
import PostRouter from './post/routes';
import CommentRouter from './comment/routes';

const router = Router();

router.get('/ping', async (_req: Request, res: Response) => {
  const controller = new PingController();
  const response = await controller.getMessage();
  return res.send(response);
});

router.use('/users', UserRouter);
router.use('/posts', PostRouter);
router.use('/comments', CommentRouter);

export default router;
