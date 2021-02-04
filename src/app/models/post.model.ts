import {User} from './user.model';

export interface PostModel {
  id: string;
  description: string;
  photoUrl: string;
  likes: number;
  user: User;
}
