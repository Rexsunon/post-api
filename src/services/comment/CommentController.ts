import { Get, Route, Post, Tags, Body, Path } from 'tsoa';

import Comment from './Comment';
import {
  createComment,
  getComment,
  getComments,
  ICommentPayload,
} from './repository/comment';

@Route('comments')
@Tags('comment')
export default class CommentController {
  @Get('/')
  public async getComments(): Promise<Array<Comment>> {
    return getComments();
  }

  @Post('/')
  public async createComment(@Body() body: ICommentPayload): Promise<Comment> {
    return createComment(body);
  }

  @Get('/:id')
  public async getComment(@Path() id: number): Promise<Comment | null> {
    return getComment(id);
  }
}
