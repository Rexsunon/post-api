import { Request, Response, Router, NextFunction } from 'express';

import PostController from './PostController';

const router = Router();

router.get('/', async (_req: Request, res: Response, _next: NextFunction) => {
  const controller = new PostController();
  const response = await controller.getPosts();
  return res.status(200).json({ success: true, data: response });
});

router.post('/', async (req: Request, res: Response, _next: NextFunction) => {
  const controller = new PostController();
  const response = await controller.createPost(req.body);
  return res.status(201).json({ success: true, data: response });
});

router.get('/:id', async (req: Request, res: Response, _next: NextFunction) => {
  const controller = new PostController();
  const response = await controller.getPost(Number(req.params.id));
  if (!response)
    return res
      .status(404)
      .json({ success: true, message: 'Post not found', data: {} });

  return res.status(200).json({ success: true, data: response });
});

export default router;
