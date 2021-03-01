import { Get, Route, Post, Tags, Body, Path } from 'tsoa';
import User from './User';
import { createUser, getUser, getUsers, IUserPayload } from './repository/user';

@Route('users')
@Tags('User')
export default class UserController {
  @Get('/')
  public async getUsers(): Promise<Array<User>> {
    return getUsers();
  }

  @Post('/')
  public async createUser(@Body() body: IUserPayload): Promise<User> {
    return createUser(body);
  }

  @Get('/:id')
  public async getUser(@Path() id: number): Promise<User | null> {
    return getUser(id);
  }
}
