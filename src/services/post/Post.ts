import {
  CreateDateColumn,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import User from '../user/User';
import Comment from '../comment/Comment';

@Entity()
export default class Post {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column({ type: 'text' })
  content!: string;

  @Column({ nullable: true })
  userId!: number;
  @ManyToOne((_type) => User, (user: User) => user.posts)
  @JoinColumn()
  user!: User;

  @OneToMany((_type) => Comment, (comment: Comment) => comment.post)
  comments!: Array<Comment>;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
