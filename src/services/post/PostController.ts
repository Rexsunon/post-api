import { Get, Route, Post as post, Tags, Body, Path } from 'tsoa';

import Post from './Post';
import { createPost, getPost, getPosts, IPostPayload } from './repository/post';

@Route('posts')
@Tags('Post')
export default class PostController {
  @Get('/')
  public async getPosts(): Promise<Array<Post>> {
    return getPosts();
  }

  @post('/')
  public async createPost(@Body() body: IPostPayload): Promise<Post> {
    return createPost(body);
  }

  @Get('/:id')
  public async getPost(@Path() id: number): Promise<Post | null> {
    return getPost(id);
  }
}
