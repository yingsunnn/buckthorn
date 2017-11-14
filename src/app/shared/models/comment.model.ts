import { User } from './user.model';

export class Comment {
    id: string;
    content: string;
    status: string;
    create_time: string;
    create_user: User;
    update_time: string;
    update_user: User;
}