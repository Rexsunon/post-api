import { Get, Route, Post, Tags, Body, Path } from 'tsoa';

import PostModel from './Post';
import { createPost, getPost, getPosts, IPostPayload } from './repository/post';

@Route('posts')
@Tags('Post')
export default class PostController {
  @Get('/')
  public async getUsers(): Promise<Array<PostModel>> {
    return getPosts();
  }

  @Post('/')
  public async createPost(@Body() body: IPostPayload): Promise<PostModel> {
    return createPost(body);
  }

  @Post('/:id')
  public async getPost(@Path() id: number): Promise<PostModel | null> {
    return getPost(id);
  }
}
