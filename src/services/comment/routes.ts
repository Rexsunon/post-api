import { Request, Response, Router, NextFunction } from 'express';

import CommentController from './CommentController';

const router = Router();

router.get('/', async (_req: Request, res: Response, _next: NextFunction) => {
  const controller = new CommentController();
  const response = controller.getComments();
  return res.status(200).json({ success: true, data: response });
});

router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
  const controller = new CommentController();
  const response = controller.createComment(req.body);
  return res.status(200).json({ success: true, data: response });
});

router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
  const controller = new CommentController();
  const response = controller.getComment(Number(req.params.id));
  if (!response)
    return res
      .status(404)
      .json({ success: true, message: 'Comment not found', data: {} });
  return res.status(200).json({ success: true, data: response });
});

export default router;
