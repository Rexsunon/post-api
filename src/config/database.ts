import { ConnectionOptions } from 'typeorm';

import User from '../services/user/User';
import Comment from '../services/comment/Comment';
import Post from '../services/post/Post';

const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  database: process.env.POSTGRES_DB || 'post-api',
  entities: [User, Post, Comment],
  synchronize: true,
};

export default config;
