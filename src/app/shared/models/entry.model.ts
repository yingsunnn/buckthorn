import { User } from './user.model';
import { Comment } from './comment.model';
import { Vote } from './vote.model';
import { Tag } from './tag.model';

export class Entry {
    id: string;
    name: string;
    definition: string;
    example: string;
    status: string;
    create_time: string;
    create_user: User;
    updateTime: string;
    updateUser: User;
    tags: Array<Tag> = [];
    comments: Array<Comment> = [];
    upVotes: Array<Vote> = [];
    downVotes: Array<Vote> = [];
}